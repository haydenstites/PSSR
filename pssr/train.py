import torch, os
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
from torch.utils.data import DataLoader, Dataset
from pytorch_msssim import ssim
from skopt import gp_minimize
from skopt.space import Dimension
from tqdm import tqdm
from PIL import Image
from .crappifiers import Crappifier
from .loss import SSIMLoss, pixel_metric, psnr_metric
from .predict import _collage_preds
from .models._blocks import GradHist

Image.MAX_IMAGE_PIXELS = None

def train_paired(
        model : nn.Module,
        dataset : Dataset, 
        batch_size : int, 
        loss_fn : nn.Module, 
        optim : torch.optim.Optimizer, 
        epochs : int, 
        device : str = "cpu", 
        scheduler : torch.optim.lr_scheduler.LRScheduler = None, 
        clamp : bool = False, 
        log_frequency : int = 50, 
        dataloader_kwargs = None
    ):
    r"""Trains model on paired high-low-resolution crappified data.

    Args:
        model (nn.Module) : Model to train on paired data.

        dataset (Dataset) : Paired image dataset to load data from.

        batch_size (int) : Batch size for dataloader.

        loss_fn (nn.Module) : Loss function for loss calculation.

        optim (Optimizer) : Optimizer for weight calculation.

        epochs (int) : Number of epochs to train model for.

        device (str) : Device to train model on. Default is "cpu".

        scheduler (LRScheduler) : Optional learning rate scheduler for training. Default is None.

        clamp (bool) : Whether to clamp model image output before weight calculation. Default is False.

        log_frequency (int) : Frequency to log losses and recalculate metrics in steps. Default is 50.

        dataloader_kwargs (dict[str, Any]) : Keyword arguments for pytorch Dataloader. Default is None.

    Returns:
        losses (list[float]) : List of losses during training.
    """
    dataloader_kwargs = {} if dataloader_kwargs is None else dataloader_kwargs
    train_dataloader = DataLoader(dataset, batch_size, **dataloader_kwargs)
    val_dataloader = DataLoader(dataset, batch_size, sampler=range(dataset.train_len, dataset.train_len + dataset.val_len), **{key:dataloader_kwargs[key] for key in dataloader_kwargs if key!="shuffle"})
    include_metric = True if type(scheduler) == torch.optim.lr_scheduler.ReduceLROnPlateau else False
    image_range = 255

    model.to(device)

    losses = []
    for epoch in range(epochs):
        # Train
        model.train()

        progress = tqdm(train_dataloader)
        for batch_idx, (hr, lr) in enumerate(progress):
            hr, lr = hr.to(device), lr.to(device)

            hr_hat = model(lr)
            if clamp:
                hr_hat = torch.clamp(hr_hat, 0, image_range)

            loss = loss_fn(hr_hat/image_range, hr/image_range)
            loss.backward()
            optim.step()
            optim.zero_grad()

            if batch_idx % log_frequency == 0:
                losses.append(loss.item())

                mse = nn.functional.mse_loss(hr_hat/image_range, hr/image_range)
                progress.set_description(f"pixel[{pixel_metric(mse, image_range):.2f}], psnr[{psnr_metric(mse, hr.max()/image_range):.2f}], ssim[{ssim(hr_hat, hr, data_range=image_range):.3f}]")

        # Validation
        model.eval()

        val_loss = []
        progress = tqdm(val_dataloader)
        progress.set_description(f"Epoch {epoch} validation...")

        with torch.no_grad():
            for hr, lr in progress:
                hr, lr = hr.to(device), lr.to(device)

                hr_hat = model(lr)
                if clamp:
                    hr_hat = torch.clamp(hr_hat, 0, image_range)

                loss = loss_fn(hr_hat/image_range, hr/image_range)
                val_loss.append(loss.item())
        val_loss = sum(val_loss) / len(val_loss)

        print(f"Epoch {epoch} validation loss: {val_loss:4f}\n")

        if scheduler:
            if include_metric:
                scheduler.step(val_loss)
            else:
                scheduler.step()
  
        collage = _collage_preds(lr, hr_hat, hr)
        os.makedirs("preds", exist_ok=True)
        collage.save(f"preds/pred{epoch}_loss{val_loss:.3f}.png")

    return losses

def train_crappifier(
        model : nn.Module, 
        dataset : Dataset, 
        batch_size : int, 
        optim : torch.optim.Optimizer, 
        epochs : int, 
        sigma : int = 5, 
        clip : float = 3, 
        device : str = "cpu", 
        scheduler : torch.optim.lr_scheduler.LRScheduler = None, 
        clamp : bool = False, 
        log_frequency : int = 50, 
        dataloader_kwargs = None
    ):
    r"""Trains an :class:`nn.Module` model as a crappifier on high and low resolution paired data.
    The model must output an image the same size as the input/have a `scale` value of 1.
    This is not necessary if you are using a :class:`Crappifier` instance as your crappifier.

    Args:
        model (nn.Module) : Model to train on paired data.

        dataset (Dataset) : Paired image dataset to load data from.

        batch_size (int) : Batch size for dataloader.

        optim (Optimizer) : Optimizer for weight calculation.

        epochs (int) : Number of epochs to train model for.

        sigma (int) : Precision of noise distribution. Higher values will yield better results can cause larger gradients that are unstable during training. Default is 5.

        clip : (float) : Max gradient for gradient clipping. Use None for no clipping.

        device (str) : Device to train model on. Default is "cpu".

        scheduler (LRScheduler) : Optional learning rate scheduler for training. Default is None.

        clamp (bool) : Whether to clamp model image output before weight calculation. Default is False.

        log_frequency (int) : Frequency to log losses and recalculate metrics in steps. Default is 50.

        dataloader_kwargs (dict[str, Any]) : Keyword arguments for pytorch Dataloader. Default is None.

    Returns:
        losses (list[float]) : List of losses during training.
    """
    dataloader_kwargs = {} if dataloader_kwargs is None else dataloader_kwargs
    train_dataloader = DataLoader(dataset, batch_size, **dataloader_kwargs)
    val_dataloader = DataLoader(dataset, batch_size, sampler=range(dataset.train_len, dataset.train_len + dataset.val_len), **{key:dataloader_kwargs[key] for key in dataloader_kwargs if key!="shuffle"})
    include_metric = True if type(scheduler) == torch.optim.lr_scheduler.ReduceLROnPlateau else False

    model.to(device)
    model.train()

    # Leave on cpu?
    hist_fn = GradHist(sigma=sigma)
    ssim_loss = SSIMLoss(ms=False)

    losses = []
    for epoch in range(epochs):
        # Train
        model.train()

        progress = tqdm(train_dataloader)
        for batch_idx, (hr, lr) in enumerate(progress):
            scale = int(hr.shape[-1]/lr.shape[-1])
            ds_hr = hr[:, :, ::scale, ::scale]
            ds_hr = ds_hr.to(device)

            lr_hat = model(ds_hr)
            if clamp:
                lr_hat = torch.clamp(lr_hat, 0, 255)

            loss = _crappifier_loss(lr.to(device), lr_hat, ds_hr, hist_fn, ssim_loss)
            loss.backward()

            if clip is not None and clip > 0:
                nn.utils.clip_grad_value_(model.parameters(), clip)

            optim.step()
            optim.zero_grad()

            if batch_idx % log_frequency == 0:
                losses.append(loss.item())

                progress.set_description(f"loss[{loss.item():.5f}]")

        # Validation
        model.eval()

        val_loss = []
        progress = tqdm(val_dataloader)
        progress.set_description(f"Epoch {epoch} validation...")

        with torch.no_grad():
            for hr, lr in progress:
                scale = int(hr.shape[-1]/lr.shape[-1])
                ds_hr = hr[:, :, ::scale, ::scale]
                ds_hr = ds_hr.to(device)

                lr_hat = model(ds_hr)
                if clamp:
                    lr_hat = torch.clamp(lr_hat, 0, 255)

                loss = _crappifier_loss(lr.to(device), lr_hat, ds_hr, hist_fn, ssim_loss)
                val_loss.append(loss.item())
        val_loss = sum(val_loss) / len(val_loss)

        print(f"Epoch {epoch} validation loss: {val_loss:4f}\n")

        if scheduler:
            if include_metric:
                scheduler.step(val_loss)
            else:
                scheduler.step()

        collage = _collage_preds(lr, lr_hat, hr)
        os.makedirs("preds", exist_ok=True)
        collage.save(f"preds/pred{epoch}_loss{val_loss:.3f}.png")
    return losses

def approximate_crappifier(crappifier : Crappifier, space : list[Dimension], dataset : Dataset, n_samples : int = 10, opt_kwargs = None):
    r"""Approximates :class:`Crappifier` parameters from ground truth paired images. Uses Bayesian optimization because Crappifier functions are not differentiable.

    Args:
        crappifier (Crappifier) : Crappifier whose parameter space will be optimized.

        space (list[Dimension]) : List of parameter spaces for each crappifier parameter.

        dataset (Dataset) : Paired image dataset to load data from.

        n_samples (int) : Number of image samples to average computations over for each optimization step. Default is 10.

        opt_kwargs (dict[str, Any]) : Keyword arguments for skopt :meth:`gp_minimize`. Default is None
    """
    opt_kwargs = {} if opt_kwargs is None else opt_kwargs
    space = [space] if type(space) is not list else space

    objective = _Crappifier_Objective(crappifier, dataset, n_samples).sample

    result = gp_minimize(objective, space, **opt_kwargs)

    return result

class _Crappifier_Objective():
    def __init__(self, crappifier : Crappifier, dataset : Dataset, n_samples : int):
        self.crappifier = crappifier
        self.dataset = dataset
        self.n_samples = n_samples

        self.idx = 0

    def sample(self, params):
        metrics = []
        for sample in range(int(self.n_samples)):
            # Grab gound truth high and low resolution images
            hr, lr = self.dataset[self.idx]
            hr, lr = np.asarray(hr, dtype=np.uint8), np.asarray(lr, dtype=np.uint8)

            self.idx = self.idx + 1 if self.idx < len(self.dataset) - 1 else 0
            
            # Downsampled high resolution image is the baseline for noise profile comparison
            ds_hr = np.asarray(Image.fromarray(np.squeeze(np.moveaxis(hr, 0, -1))).resize(lr.shape[-2:], Image.Resampling.BILINEAR))
            if len(ds_hr.shape) > 2:
                ds_hr = np.moveaxis(ds_hr, -1, 0)

            # Generate artificial low resolution image using optimized crappifier parameters
            lr_hat = self.crappifier(*params).crappify(ds_hr)
            if len(lr_hat.shape) < 3:
                lr_hat = lr_hat[np.newaxis, :, :]
 
            # Generate distribution of noise values for both crappified and ground truth low resolution images
            # NOTE: Cant use SSIM or MSE on images as Crappifier noise levels will converge to zero because a noiseless downscaled image will be closer to ground truth than one with correct amount of noise
            pred_profile = lr_hat.astype(np.float32) - ds_hr.astype(np.float32)
            target_profile = lr.astype(np.float32) - ds_hr.astype(np.float32)

            bins = np.arange(-256, 256)
            pred_dist, _ = np.histogram(pred_profile.flatten(), bins)
            target_dist, _ = np.histogram(target_profile.flatten(), bins)
            
            # Aggregate errors of both noise distribution and mean noise profile value
            # We are not generating the noise, so spacial significance is low and mean value is used (spacial loss would underapproximate the correct amount of noise)
            dist_error = (target_dist - pred_dist)**2
            value_error = abs(target_profile.mean() - pred_profile.mean())
            mse = (target_profile - pred_profile)**2

            loss = (dist_error.mean() * value_error + mse.mean()) / (255**2)
            metrics.append(loss)
        return sum(metrics) / len(metrics)

def _crappifier_loss(lr, lr_hat, ds_hr, hist_fn, ssim_loss):
    # Process outlined in approximate_crappifier
    pred_profile = lr_hat - ds_hr
    target_profile = lr - ds_hr

    pred_dist = hist_fn(pred_profile)
    target_dist = hist_fn(target_profile)

    # We are generating the noise, so a spacial criterion must be present (in a lower order as to optimize purely to the "noiseless" profile)
    dist_error = F.mse_loss(pred_dist, target_dist)
    profile_error = ssim_loss(pred_profile, target_profile)
    # value_error = F.l1_loss(pred_profile.view(pred_profile.shape[0], -1).mean(1), target_profile.view(target_profile.shape[0], -1).mean(1))

    loss = dist_error * profile_error / (255**2)
    return loss
