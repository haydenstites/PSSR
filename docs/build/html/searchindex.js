Search.setIndex({"docnames": ["guide/principles", "guide/start", "guide/workflow", "index", "reference/CLI", "reference/api", "reference/crappifiers", "reference/crappifiers/AdditiveGaussian", "reference/crappifiers/Crappifier", "reference/crappifiers/MultiCrappifier", "reference/crappifiers/Poisson", "reference/crappifiers/SaltPepper", "reference/data", "reference/data/ImageDataset", "reference/data/PairedImageDataset", "reference/data/PairedSlidingDataset", "reference/data/SlidingDataset", "reference/data/preprocess_dataset", "reference/loss", "reference/loss/SSIMLoss", "reference/loss/pixel_metric", "reference/models", "reference/models/RDResUNet", "reference/models/ResUNet", "reference/predict", "reference/predict/normalize_preds", "reference/predict/predict_collage", "reference/predict/predict_images", "reference/predict/test_metrics", "reference/train", "reference/train/approximate_crappifier", "reference/train/train_crappifier", "reference/train/train_paired"], "filenames": ["guide/principles.rst", "guide/start.rst", "guide/workflow.rst", "index.rst", "reference/CLI.rst", "reference/api.rst", "reference/crappifiers.rst", "reference/crappifiers/AdditiveGaussian.rst", "reference/crappifiers/Crappifier.rst", "reference/crappifiers/MultiCrappifier.rst", "reference/crappifiers/Poisson.rst", "reference/crappifiers/SaltPepper.rst", "reference/data.rst", "reference/data/ImageDataset.rst", "reference/data/PairedImageDataset.rst", "reference/data/PairedSlidingDataset.rst", "reference/data/SlidingDataset.rst", "reference/data/preprocess_dataset.rst", "reference/loss.rst", "reference/loss/SSIMLoss.rst", "reference/loss/pixel_metric.rst", "reference/models.rst", "reference/models/RDResUNet.rst", "reference/models/ResUNet.rst", "reference/predict.rst", "reference/predict/normalize_preds.rst", "reference/predict/predict_collage.rst", "reference/predict/predict_images.rst", "reference/predict/test_metrics.rst", "reference/train.rst", "reference/train/approximate_crappifier.rst", "reference/train/train_crappifier.rst", "reference/train/train_paired.rst"], "titles": ["Principles of PSSR", "Getting Started", "Workflow", "PSSR Documentation", "CLI", "pssr", "crappifiers", "AdditiveGaussian", "Crappifier", "MultiCrappifier", "Poisson", "SaltPepper", "data", "ImageDataset", "PairedImageDataset", "PairedSlidingDataset", "SlidingDataset", "preprocess_dataset", "loss", "SSIMLoss", "pixel_metric", "models", "RDResUNet", "ResUNet", "predict", "normalize_preds", "predict_collage", "predict_images", "test_metrics", "train", "approximate_crappifier", "train_crappifier", "train_paired"], "terms": {"thi": [0, 2, 3, 8, 12, 13, 14, 15, 16, 21, 31], "section": [0, 2], "can": [0, 1, 2, 3, 12, 13, 14, 15, 16, 21, 22, 23, 29, 31], "consid": 0, "an": [0, 1, 2, 8, 22, 23, 26, 31], "abbrevi": 0, "import": [0, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "concept": 0, "cover": [0, 1, 3, 4], "full": [0, 1, 3, 11], "paper": [0, 1, 3], "deep": [0, 3], "learn": [0, 1, 2, 3, 4, 31, 32], "base": [0, 3, 8, 21], "point": [0, 3, 5], "scan": [0, 3, 5], "super": [0, 1, 2, 3, 5, 21], "resolut": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 25, 26, 27, 28, 29, 31, 32], "imag": [0, 1, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32], "data": [0, 1, 2, 3, 4, 5, 13, 14, 15, 16, 17, 22, 23, 26, 28, 30, 31, 32], "aquisit": 0, "i": [0, 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 30, 31, 32], "often": 0, "costli": 0, "time": [0, 2, 15, 16, 21], "consum": 0, "microscopi": [0, 1, 3], "requir": [0, 1], "balanc": 0, "numer": 0, "paramet": [0, 2, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 22, 23, 25, 26, 27, 28, 30, 31, 32], "captur": 0, "ideal": 0, "addition": [0, 2], "high": [0, 1, 2, 6, 7, 12, 13, 14, 15, 16, 17, 25, 26, 27, 29, 31, 32], "exposur": 0, "destruct": 0, "sampl": [0, 1, 6, 7, 10, 30], "especi": 0, "when": [0, 2, 13, 14, 15, 16, 29], "measur": 0, "fluoresc": 0, "allow": 0, "limit": 0, "mitig": 0, "resolv": [0, 2], "low": [0, 1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 26, 27, 28, 29, 31, 32], "set": [0, 1, 2, 13, 16, 26, 27, 28], "pair": [0, 1, 2, 12, 13, 14, 16, 26, 27, 28, 29, 30, 31, 32], "where": [0, 1, 2, 12], "have": [0, 1, 2, 3, 4, 12, 22, 31], "4": [0, 1, 2, 13, 14, 15, 16, 22, 23], "correspond": [0, 22], "although": 0, "mai": [0, 1, 2], "contain": [0, 1, 2, 3, 13, 14, 15, 16], "16": [0, 1, 2, 4, 22, 23], "amount": [0, 2, 13, 14, 15, 16, 21], "pixel": [0, 1, 15, 16, 20, 22, 23, 28], "thei": [0, 2], "do": [0, 1, 2, 12, 21], "inform": 0, "about": 0, "For": [0, 1, 2, 13, 15, 16], "exampl": [0, 1, 2], "some": 0, "redund": 0, "while": [0, 2], "structur": 0, "easili": [0, 1, 2], "infer": 0, "techniqu": 0, "counterpart": [0, 2, 6], "without": [0, 1, 4, 14, 15], "hallucin": 0, "benchmark": [0, 24, 25], "against": 0, "human": 0, "expert": 0, "provid": [0, 1, 2, 4, 22, 23, 27], "suitabl": 0, "model": [0, 1, 3, 4, 5, 12, 22, 23, 24, 26, 27, 28, 29, 31, 32], "train": [0, 3, 4, 5, 7, 10, 11, 13, 14, 15, 16, 18, 26, 27, 28, 30, 31, 32], "off": 0, "convent": [0, 21], "differ": [0, 1, 2, 12], "from": [0, 1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "norm": [0, 26, 27, 28], "its": [0, 1], "implement": [0, 1, 2, 8], "perhap": 0, "biggest": 0, "In": [0, 2], "order": [0, 2, 9, 15, 16, 26], "must": [0, 1, 2, 19, 22, 23, 27, 31], "input": [0, 1, 2, 12, 13, 21, 31], "target": 0, "respect": [0, 1, 7, 13, 14, 15, 16, 22, 23], "howev": [0, 1], "due": 0, "difficulti": 0, "cost": 0, "acquir": [0, 2], "approach": 0, "just": 0, "impract": 0, "imposs": 0, "non": 0, "static": 0, "live": 0, "subcellular": 0, "organel": 0, "To": [0, 1, 2], "circumv": 0, "novel": 0, "dure": [0, 2, 13, 14, 15, 16, 31, 32], "computation": [0, 6], "degrad": [0, 6, 8, 9, 13, 16], "process": [0, 17], "crappif": [0, 7, 10, 11, 13, 14, 15, 16, 17], "doe": [0, 1, 2], "It": [0, 1, 2, 4], "first": [0, 2, 9], "downsampl": [0, 22], "lower": [0, 1, 7], "befor": [0, 1, 2, 3, 31, 32], "inject": [0, 8], "layer": [0, 2, 21, 22, 23], "nois": [0, 6, 7, 8, 10, 11, 31], "approxim": [0, 7, 14, 15, 30, 31], "true": [0, 2, 6, 9, 13, 14, 15, 16, 19, 22, 23, 26, 28, 29], "gener": [0, 1, 2, 10, 12], "ar": [0, 1, 2, 12, 21, 30, 31], "repres": [0, 1, 2, 6], "enough": 0, "ground": [0, 2, 20, 25, 26, 27, 28, 30], "truth": [0, 2, 20, 25, 26, 27, 28, 30], "make": [0, 3], "accur": 0, "real": [0, 1, 2], "world": [0, 1, 2], "python": 1, "us": [1, 3, 4, 7, 10, 11, 12, 13, 14, 15, 16, 19, 21, 22, 23, 26, 27, 28, 30, 31], "pssr": [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "If": [1, 2, 3, 22, 23], "you": [1, 2, 3, 31], "alreadi": [1, 2], "download": 1, "here": [1, 2], "want": [1, 2], "creat": [1, 2], "environ": 1, "conda": 1, "env": 1, "equival": [1, 2], "ani": [1, 3, 4, 19, 21, 22, 28, 30, 31, 32], "other": [1, 2], "manag": 1, "chose": 1, "so": [1, 2], "via": 1, "pip": 1, "packag": [1, 3, 4, 31, 32], "specif": [1, 12], "version": [1, 2], "also": [1, 2, 13, 14, 15, 16, 22, 23], "directli": 1, "github": [1, 3], "repositori": [1, 21], "git": 1, "http": [1, 3], "com": [1, 3], "ucsdmanorlab": [1, 3], "dist": 1, "x": 1, "py3": 1, "none": [1, 10, 13, 14, 15, 16, 19, 22, 23, 26, 27, 30, 31, 32], "whl": 1, "The": [1, 2, 3, 4, 8, 31], "includ": [1, 4, 17, 22, 23], "command": 1, "line": 1, "simpl": [1, 4, 20], "interfac": [1, 4], "write": [1, 4], "code": [1, 2, 3, 4], "most": [1, 4, 31], "basic": [1, 3, 4, 19], "case": [1, 2, 4], "either": [1, 13, 29], "mode": [1, 4, 12, 13, 14, 15, 16], "take": [1, 2, 12, 21, 29], "number": [1, 2, 4, 19, 22, 23, 26, 30, 31, 32], "arug": 1, "describ": [1, 3], "below": 1, "usag": [1, 3, 4, 12], "h": [1, 4], "t": [1, 2, 4, 15, 16], "dp": [1, 4], "data_path": [1, 4], "dt": [1, 4], "data_typ": [1, 4], "mt": [1, 4], "model_typ": [1, 4], "mp": [1, 4], "model_path": [1, 4], "e": [1, 4, 13, 14, 15, 16, 21], "epoch": [1, 2, 4, 31, 32], "b": [1, 4], "batch_siz": [1, 2, 4, 31, 32], "lr": [1, 2, 4, 12, 13, 16], "p": [1, 4], "patienc": [1, 2, 4], "mse": [1, 2, 4, 20, 28], "sl": [1, 4], "enabl": [1, 2, 4, 13, 16], "default": [1, 2, 4, 7, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 22, 23, 25, 26, 27, 28, 30, 31, 32], "fals": [1, 4, 17, 22, 23, 27, 31, 32], "path": [1, 2, 4, 13, 14, 15, 16], "specifi": [1, 2, 4, 17], "dataset": [1, 2, 4, 12, 13, 14, 15, 16, 17, 26, 27, 28, 30, 31, 32], "type": [1, 4, 8, 25, 27, 28, 31, 32], "imagedataset": [1, 2, 3, 4, 5, 12, 15, 16], "resunet": [1, 2, 3, 4, 5, 21, 22], "10": [1, 4], "batch": [1, 2, 4, 31, 32], "size": [1, 2, 4, 12, 13, 15, 16, 19, 22, 23, 31, 32], "rate": [1, 2, 4, 31, 32], "0": [1, 2, 4, 7, 10, 11, 13, 16, 19, 22, 23, 25], "001": [1, 4], "decai": [1, 2, 4], "3": [1, 2, 4, 22, 23, 31], "loss": [1, 2, 3, 4, 5, 19, 20, 31, 32], "instead": [1, 2, 4, 22, 23], "ssim": [1, 2, 4, 19, 28], "save": [1, 2, 4, 17, 26, 27, 31, 32], "keep": [1, 2, 12, 21], "mind": 1, "object": [1, 13, 16], "defin": 1, "class": [1, 8], "declar": 1, "additon": 1, "syntax": 1, "could": 1, "given": [1, 2, 17, 27], "hidden": [1, 2, 21, 22, 23], "128": [1, 2, 15, 16, 21, 23], "256": [1, 2, 21, 22, 23], "scale": [1, 2, 22, 23, 31], "access": 1, "em": 1, "found": [1, 3], "512x512": 1, "hr_re": [1, 2, 13, 14, 15, 16], "512": [1, 2, 13, 14, 15, 16, 22, 23], "2nm": 1, "test": [1, 14, 15], "same": [1, 2, 31], "larger": [1, 10, 13, 14, 15, 16, 31], "all": [1, 2, 3, 13, 14, 15, 16, 26, 27, 28, 29, 30], "3dem": 1, "org": 1, "your": [1, 2, 31], "chang": 1, "correspondingli": 1, "A": [1, 2, 6, 13, 14, 15, 16, 21, 22, 23, 27, 31, 32], "replac": [1, 11], "folder": [1, 2, 13, 14, 15, 16], "sheet": [1, 13, 15, 16], "crappifi": [1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 16, 30, 31, 32], "which": [1, 2, 27], "explain": [1, 2], "principl": [1, 3], "By": [1, 2], "pth": [1, 2], "g": [1, 13, 14, 15, 16, 21], "czi": [1, 13, 15, 16], "file": [1, 2, 13, 14, 15, 16, 26, 27], "rather": 1, "than": [1, 2, 13, 14, 15, 16, 19, 22, 23], "mani": 1, "slidingdataset": [1, 3, 5, 12, 13], "ad": [1, 10, 11], "pretrain": 1, "demo": 1, "omit": 1, "should": [1, 2, 6, 22, 23], "upscal": [1, 2, 22, 23, 26], "pred": [1, 2, 26, 27, 31, 32], "automat": 1, "detect": 1, "lr_scale": [1, 2, 13, 14, 15, 16], "1": [1, 2, 10, 13, 14, 15, 16, 19, 22, 23, 25, 26, 27, 28, 31], "pairedimagedataset": [1, 2, 3, 5, 12], "instanc": [1, 2, 26, 31], "addit": [1, 7, 11, 13, 14, 15, 16, 17, 19, 22, 23], "perform": [1, 2], "metric": [1, 2, 18, 20, 28, 31, 32], "calcul": [1, 19, 20, 28, 31, 32], "both": [1, 15, 16], "hr_path": [1, 14, 15], "hr": [1, 2, 25], "lr_path": [1, 14, 15], "repleac": 1, "still": [1, 2, 3], "familar": 1, "understand": 1, "beyond": 1, "extent": 1, "how": [1, 2], "own": 1, "workflow": [1, 3, 31], "refer": [1, 5], "explan": [1, 3], "tool": [1, 3], "avail": [1, 2, 3], "api": [1, 5], "similar": 2, "cli": [2, 3, 5], "necessarili": [2, 21], "appli": [2, 9, 13, 14, 15, 16, 19], "meant": 2, "expand": 2, "upon": 2, "dive": 2, "we": 2, "our": 2, "torch": [2, 13, 16, 31, 32], "poisson": [2, 3, 5, 6, 7, 13, 16], "ssimloss": [2, 3, 5, 18], "train_pair": [2, 3, 5, 29], "optim": [2, 30, 31, 32], "lr_schedul": [2, 31, 32], "reducelronplateau": 2, "util": [2, 31, 32], "gain": [2, 7, 10, 11], "intens": [2, 7, 10, 11, 25, 26, 27, 28], "variabl": 2, "synthet": [2, 12, 29], "depend": 2, "format": 2, "assum": 2, "slice": [2, 17, 26], "extens": [2, 13, 14, 15, 16], "tif": [2, 13, 14], "load": [2, 12, 13, 14, 15, 16, 17, 26, 27, 28, 30, 31, 32], "horizont": [2, 26], "vertic": [2, 26], "squar": [2, 20], "wrong": 2, "crop": [2, 17], "rescal": 2, "fit": 2, "earlier": 2, "smaller": [2, 13, 14, 15, 16], "user": [2, 12, 21], "advis": [2, 12, 21], "power": [2, 12, 13, 14, 15, 16, 21, 22, 23], "2": [2, 12, 13, 14, 15, 16, 21, 22, 23], "even": [2, 12], "raw": [2, 12], "elabor": [2, 12], "last": [2, 9, 13, 14, 15, 16, 22, 23], "thing": 2, "need": 2, "64": [2, 23], "1024": [2, 22, 23], "depth": [2, 22, 23], "factor": [2, 13, 14, 15, 16, 22, 23], "channel": [2, 13, 14, 15, 16, 19, 22, 23], "per": [2, 13, 14, 15, 16, 22, 23, 28], "each": [2, 9, 22, 26, 30], "convolut": [2, 22, 23], "As": 2, "function": [2, 8, 12, 18, 24, 29, 30, 32], "simplic": 2, "begin": [2, 26, 27], "loss_fn": [2, 32], "mix": [2, 10, 19], "8": [2, 19, 22, 23], "m": [2, 19], "good": 2, "result": [2, 13, 14, 15, 16, 22, 23], "visual": 2, "signific": 2, "element": [2, 22], "control": [2, 23], "invers": 2, "contribut": 2, "correct": [2, 19], "l1": [2, 19], "more": [2, 7], "robust": 2, "adamw": 2, "1e": 2, "schedul": [2, 31, 32], "5": [2, 11, 19, 31], "verbos": 2, "start": [2, 3], "after": [2, 22], "doesn": 2, "improv": [2, 3], "And": 2, "final": [2, 13, 14, 15, 16], "miscellan": 2, "devic": [2, 26, 27, 28, 31, 32], "cuda": 2, "is_avail": 2, "els": 2, "cpu": [2, 26, 27, 28, 31, 32], "kwarg": [2, 19], "dict": [2, 19, 22, 28, 30, 31, 32], "shuffl": 2, "num_work": 2, "pin_memori": 2, "along": 2, "dataload": [2, 12, 15, 16, 17, 31, 32], "adjust": 2, "memori": [2, 15, 16], "now": [2, 8], "20": 2, "dataloader_kwarg": [2, 31, 32], "variou": [2, 3, 24, 29], "monitor": 2, "progress": 2, "end": [2, 22, 23], "everi": 2, "collag": [2, 26, 31, 32], "over": [2, 19, 30], "futur": 2, "state_dict": 2, "plot": 2, "return": [2, 8, 13, 16, 25, 27, 28, 31, 32], "see": 2, "matplotlib": 2, "pyplot": 2, "plt": 2, "output": [2, 10, 11, 26, 27, 28, 31, 32], "There": 2, "two": 2, "decid": 2, "run": [2, 3], "separ": 2, "proceed": 2, "load_state_dict": 2, "architectur": 2, "previous": 2, "predict_imag": [2, 3, 5, 24], "phase": 2, "experiment": [2, 31], "onli": [2, 8, 12, 13, 14, 15, 16, 26, 27, 28], "test_dataset": 2, "impli": 2, "them": 2, "align": [2, 26], "ha": [2, 8, 22, 23], "test_metr": [2, 3, 5, 24], "quantifi": 2, "new": [2, 3], "paired_dataset": 2, "properli": 2, "name": [2, 26, 27, 28], "scheme": 2, "iter": 2, "comput": [2, 28, 30], "standard": [3, 7, 10, 11], "pytorch": [3, 21, 31, 32], "task": 3, "offici": 3, "reimplement": 3, "method": [3, 8], "origin": 3, "featur": 3, "never": 3, "get": 3, "outlin": 3, "instal": [3, 4], "develop": 3, "experi": 3, "bug": 3, "unexpect": 3, "behavior": 3, "suggest": 3, "sure": 3, "open": 3, "ticket": 3, "next": 3, "step": [3, 9, 30, 31, 32], "why": 3, "predict": [3, 5, 12, 13, 14, 15, 16, 18, 20, 22, 23, 25, 26, 27, 28], "modul": [3, 13, 14, 15, 16, 26, 27, 28, 31, 32], "approximate_crappifi": [3, 5, 29], "train_crappifi": [3, 5, 29], "predict_collag": [3, 5, 24], "normalize_pr": [3, 5, 24], "pairedslidingdataset": [3, 5, 12], "preprocess_dataset": [3, 5, 12], "multicrappifi": [3, 5, 6], "additivegaussian": [3, 5, 6], "saltpepp": [3, 5, 6], "rdresunet": [3, 5, 21], "pixel_metr": [3, 5, 18], "__init__": [7, 9, 10, 11, 13, 14, 15, 16, 19, 22, 23], "self": [7, 8, 9, 10, 11, 13, 14, 15, 16, 19, 22, 23], "float": [7, 10, 11, 13, 14, 15, 16, 19, 20, 25, 31, 32], "13": 7, "spread": [7, 10, 11], "gaussian": [7, 19], "normal": [7, 25, 26, 27, 28], "distribut": [7, 10, 19, 31], "add": [7, 10, 11], "deviat": [7, 10, 11], "higher": [7, 31], "valu": [7, 9, 10, 11, 13, 14, 15, 16, 19, 20, 22, 23, 27, 28, 31, 32], "introduc": 7, "mean": [7, 20], "rais": 7, "rang": [7, 9, 10, 11, 20], "abstract": 8, "custom": 8, "overrid": 8, "logic": 8, "ndarrai": [8, 25, 27], "simul": [8, 13, 14, 15, 16], "undersampl": [8, 13, 14, 15, 16], "respons": 8, "downscal": [8, 13, 14, 15, 16], "np": [8, 27], "been": 8, "crap": 8, "arg": 9, "clip": [9, 31], "bool": [9, 13, 14, 15, 16, 17, 19, 22, 23, 26, 27, 28, 31, 32], "chain": 9, "multipl": 9, "sequenti": 9, "between": [9, 15, 16, 20], "shot": 10, "interpol": 10, "amplifi": 10, "salt": 11, "pepper": 11, "delet": 11, "percent": 11, "handl": [12, 15, 16], "unmodifi": [12, 13, 16], "individu": [12, 13], "pathlib": [13, 16], "int": [13, 14, 15, 16, 19, 20, 22, 23, 26, 30, 31, 32], "n_frame": [13, 14, 15, 16], "str": [13, 14, 15, 16, 17, 19, 22, 26, 27, 28, 30, 31, 32], "l": [13, 14, 15, 16], "val_split": [13, 14, 15, 16, 26, 27, 28], "rotat": [13, 14, 15, 16, 17], "split_se": [13, 14, 15, 16], "transform": [13, 14, 15, 16], "list": [13, 14, 15, 16, 22, 23, 27, 28, 30, 31, 32], "nn": [13, 14, 15, 16, 26, 27, 28, 31, 32], "latter": [13, 16], "receiv": [13, 16], "pre": [13, 15, 16], "tile": [13, 15, 16], "less": [13, 19, 22, 23], "equal": 13, "pad": [13, 14, 15, 16, 17], "choos": [13, 14, 15, 16, 22, 23], "best": [13, 14, 15, 16, 22, 23], "Not": [13, 16], "stack": [13, 14, 15, 16, 26], "frame": [13, 14, 15, 16, 17, 26], "disregard": [13, 14, 15, 16], "color": [13, 14, 15, 16], "grayscal": [13, 14, 15, 16], "rgb": [13, 14, 15, 16], "proport": [13, 14, 15, 16], "held": [13, 14, 15, 16], "out": [13, 14, 15, 16, 22, 23, 28], "evalu": [13, 14, 15, 16, 26, 27, 28], "whether": [13, 14, 15, 16, 17, 19, 22, 23, 26, 27, 28, 31, 32], "randomli": [13, 14, 15, 16], "flip": [13, 14, 15, 16], "applic": [13, 14, 15, 16, 26, 27, 28], "seed": [13, 14, 15, 16], "random": [13, 14, 15, 16], "split": [13, 14, 15, 16], "overlap": [15, 16], "tz": [15, 16], "preload": [15, 16], "neighbor": [15, 16], "increas": [15, 16], "effect": [15, 16], "multifram": [15, 16], "z": [15, 16], "dimens": [15, 16, 30], "zt": [15, 16], "determin": [15, 16, 17], "flattent": [15, 16], "vram": [15, 16], "faster": [15, 16], "preprocess_hr": 17, "out_dir": [17, 26, 27], "preprocess": 17, "procedur": 17, "argument": [17, 19, 22, 23, 30, 31, 32], "disabl": 17, "directori": [17, 26, 27, 31, 32], "deriv": [19, 22, 23], "zhao": 19, "et": [19, 22, 23], "al": [19, 22, 23], "2018": 19, "win_siz": 19, "11": [19, 31, 32], "win_sigma": 19, "detail": [19, 22, 23], "entir": 19, "window": 19, "odd": 19, "sigma": [19, 31], "keyword": [19, 22, 30, 31, 32], "pytorch_msssim": 19, "image_rang": 20, "255": 20, "averag": [20, 28, 30], "error": 20, "conform": 21, "place": 21, "desir": 21, "These": 21, "account": 21, "uneven": 21, "max": [21, 31], "pool": [21, 22, 23], "therefor": 21, "maximum": [21, 25, 26], "cannot": 21, "exce": 21, "evenli": 21, "half": 21, "becaus": [21, 30], "rdnet": 22, "kim": 22, "2024": 22, "zhang": [22, 23], "2017": [22, 23], "diakogianni": [22, 23], "2020": [22, 23], "dilat": [22, 23], "pool_siz": [22, 23], "encoder_pool": [22, 23], "rdnet_kwarg": 22, "revit": 22, "densenet": 22, "encod": [22, 23], "decod": 22, "block": [22, 23], "atrou": [22, 23], "residu": [22, 23], "unet": [22, 23], "2019": [22, 23], "divis": [22, 23], "elementwis": [22, 23], "skip": [22, 31, 32], "connect": 22, "ratio": [22, 23], "psp": [22, 23], "rdresuneta": 22, "__new__": [22, 23], "cl": [22, 23], "15": [22, 23], "wrapper": [22, 23], "altern": [22, 23], "network": [22, 23], "width": 23, "length": 23, "resuneta": 23, "31": 23, "hr_hat": 25, "pmin": 25, "pmax": 25, "99": 25, "9": 25, "fair": 25, "arrai": 25, "percentil": 25, "minimum": 25, "hr_hat_norm": 25, "hr_norm": 25, "n_imag": 26, "prefix": [26, 27], "center": 26, "displai": 26, "reciev": [26, 27, 28], "concaten": 26, "valid": [26, 31, 32], "50": [26, 31, 32], "append": [26, 27], "psnr": 28, "avg": 28, "restor": 28, "v": 28, "singl": 28, "dictionari": 28, "semi": 29, "space": 30, "max_imag": 30, "opt_kwarg": 30, "bayesian": 30, "differenti": 30, "whose": 30, "skopt": 30, "gp_minim": 30, "home": [31, 32], "haydenstit": [31, 32], "anaconda3": [31, 32], "lib": [31, 32], "python3": [31, 32], "site": [31, 32], "py": [31, 32], "clamp": [31, 32], "log_frequ": [31, 32], "collage_dir": [31, 32], "NOT": 31, "current": 31, "recommend": 31, "FOR": 31, "necessari": 31, "weight": [31, 32], "precis": 31, "better": 31, "caus": 31, "gradient": 31, "unstabl": 31, "lrschedul": [31, 32], "option": [31, 32], "frequenc": [31, 32], "log": [31, 32], "recalcul": [31, 32]}, "objects": {"pssr.crappifiers.AdditiveGaussian": [[7, 0, 1, "", "__init__"]], "pssr.crappifiers": [[8, 1, 1, "", "Crappifier"]], "pssr.crappifiers.Crappifier": [[8, 0, 1, "", "crappify"]], "pssr.crappifiers.MultiCrappifier": [[9, 0, 1, "", "__init__"]], "pssr.crappifiers.Poisson": [[10, 0, 1, "", "__init__"]], "pssr.crappifiers.SaltPepper": [[11, 0, 1, "", "__init__"]], "pssr.data.ImageDataset": [[13, 0, 1, "", "__init__"]], "pssr.data.PairedImageDataset": [[14, 0, 1, "", "__init__"]], "pssr.data.PairedSlidingDataset": [[15, 0, 1, "", "__init__"]], "pssr.data.SlidingDataset": [[16, 0, 1, "", "__init__"]], "pssr.data": [[17, 0, 1, "", "preprocess_dataset"]], "pssr.loss.SSIMLoss": [[19, 0, 1, "", "__init__"]], "pssr.loss": [[20, 0, 1, "", "pixel_metric"]], "pssr.models.RDResUNet": [[22, 0, 1, "", "__init__"]], "pssr.models.RDResUNetA": [[22, 0, 1, "", "__new__"]], "pssr.models.ResUNet": [[23, 0, 1, "", "__init__"]], "pssr.models.ResUNetA": [[23, 0, 1, "", "__new__"]], "pssr.predict": [[25, 0, 1, "", "normalize_preds"], [26, 0, 1, "", "predict_collage"], [27, 0, 1, "", "predict_images"], [28, 0, 1, "", "test_metrics"]], "pssr.train": [[30, 0, 1, "", "approximate_crappifier"], [31, 0, 1, "", "train_crappifier"], [32, 0, 1, "", "train_paired"]]}, "objtypes": {"0": "py:function", "1": "py:class"}, "objnames": {"0": ["py", "function", "Python function"], "1": ["py", "class", "Python class"]}, "titleterms": {"principl": 0, "pssr": [0, 3, 5], "why": 0, "us": [0, 2], "The": 0, "crappifi": [0, 6, 8], "get": 1, "start": 1, "instal": 1, "run": 1, "cli": [1, 4], "name": [1, 4], "argument": [1, 2, 4], "train": [1, 2, 29], "predict": [1, 2, 24], "next": 1, "step": 1, "workflow": 2, "basic": 2, "model": [2, 21], "defin": 2, "object": 2, "imag": 2, "benchmark": 2, "document": 3, "user": 3, "guid": 3, "api": 3, "refer": 3, "modul": [6, 12, 18, 21, 24, 29], "additivegaussian": 7, "multicrappifi": 9, "poisson": 10, "saltpepp": 11, "data": 12, "imagedataset": 13, "pairedimagedataset": 14, "pairedslidingdataset": 15, "slidingdataset": 16, "preprocess_dataset": 17, "loss": 18, "ssimloss": 19, "pixel_metr": 20, "rdresunet": 22, "resunet": 23, "normalize_pr": 25, "predict_collag": 26, "predict_imag": 27, "test_metr": 28, "approximate_crappifi": 30, "train_crappifi": 31, "train_pair": 32}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Principles of PSSR": [[0, "principles-of-pssr"]], "Why Use PSSR": [[0, "why-use-pssr"]], "The Crappifier": [[0, "the-crappifier"]], "Getting Started": [[1, "getting-started"]], "Installation": [[1, "installation"]], "Running the CLI": [[1, "running-the-cli"]], "Named Arguments": [[1, "named-arguments"], [4, "named-arguments"]], "Training": [[1, "training"], [2, "training"]], "Predicting": [[1, "predicting"]], "Next Steps": [[1, "next-steps"]], "Workflow": [[2, "workflow"]], "Training a Basic Model": [[2, "training-a-basic-model"]], "Defining Objects": [[2, "defining-objects"]], "Train Arguments": [[2, "train-arguments"]], "Using the Model for Predictions": [[2, "using-the-model-for-predictions"]], "Predicting Images": [[2, "predicting-images"]], "Benchmarking the Model": [[2, "benchmarking-the-model"]], "PSSR Documentation": [[3, "pssr-documentation"]], "User Guide": [[3, "user-guide"], [3, null]], "API Reference": [[3, "api-reference"], [3, null]], "CLI": [[4, "cli"]], "pssr": [[5, "pssr"]], "crappifiers": [[6, "crappifiers"]], "Modules": [[6, "modules"], [12, "modules"], [18, "modules"], [21, "modules"], [24, "modules"], [29, "modules"]], "AdditiveGaussian": [[7, "additivegaussian"]], "Crappifier": [[8, "crappifier"]], "MultiCrappifier": [[9, "multicrappifier"]], "Poisson": [[10, "poisson"]], "SaltPepper": [[11, "saltpepper"]], "data": [[12, "data"]], "ImageDataset": [[13, "imagedataset"]], "PairedImageDataset": [[14, "pairedimagedataset"]], "PairedSlidingDataset": [[15, "pairedslidingdataset"]], "SlidingDataset": [[16, "slidingdataset"]], "preprocess_dataset": [[17, "preprocess-dataset"]], "loss": [[18, "loss"]], "SSIMLoss": [[19, "ssimloss"]], "pixel_metric": [[20, "pixel-metric"]], "models": [[21, "models"]], "RDResUNet": [[22, "rdresunet"]], "ResUNet": [[23, "resunet"]], "predict": [[24, "predict"]], "normalize_preds": [[25, "normalize-preds"]], "predict_collage": [[26, "predict-collage"]], "predict_images": [[27, "predict-images"]], "test_metrics": [[28, "test-metrics"]], "train": [[29, "train"]], "approximate_crappifier": [[30, "approximate-crappifier"]], "train_crappifier": [[31, "train-crappifier"]], "train_paired": [[32, "train-paired"]]}, "indexentries": {"__init__() (in module pssr.crappifiers.additivegaussian)": [[7, "pssr.crappifiers.AdditiveGaussian.__init__"]], "crappifier (class in pssr.crappifiers)": [[8, "pssr.crappifiers.Crappifier"]], "crappify() (in module pssr.crappifiers.crappifier)": [[8, "pssr.crappifiers.Crappifier.crappify"]], "__init__() (in module pssr.crappifiers.multicrappifier)": [[9, "pssr.crappifiers.MultiCrappifier.__init__"]], "__init__() (in module pssr.crappifiers.poisson)": [[10, "pssr.crappifiers.Poisson.__init__"]], "__init__() (in module pssr.crappifiers.saltpepper)": [[11, "pssr.crappifiers.SaltPepper.__init__"]], "__init__() (in module pssr.data.imagedataset)": [[13, "pssr.data.ImageDataset.__init__"]], "__init__() (in module pssr.data.pairedimagedataset)": [[14, "pssr.data.PairedImageDataset.__init__"]], "__init__() (in module pssr.data.pairedslidingdataset)": [[15, "pssr.data.PairedSlidingDataset.__init__"]], "__init__() (in module pssr.data.slidingdataset)": [[16, "pssr.data.SlidingDataset.__init__"]], "preprocess_dataset() (in module pssr.data)": [[17, "pssr.data.preprocess_dataset"]], "__init__() (in module pssr.loss.ssimloss)": [[19, "pssr.loss.SSIMLoss.__init__"]], "pixel_metric() (in module pssr.loss)": [[20, "pssr.loss.pixel_metric"]], "__init__() (in module pssr.models.rdresunet)": [[22, "pssr.models.RDResUNet.__init__"]], "__new__() (in module pssr.models.rdresuneta)": [[22, "pssr.models.RDResUNetA.__new__"]], "__init__() (in module pssr.models.resunet)": [[23, "pssr.models.ResUNet.__init__"]], "__new__() (in module pssr.models.resuneta)": [[23, "pssr.models.ResUNetA.__new__"]], "normalize_preds() (in module pssr.predict)": [[25, "pssr.predict.normalize_preds"]], "predict_collage() (in module pssr.predict)": [[26, "pssr.predict.predict_collage"]], "predict_images() (in module pssr.predict)": [[27, "pssr.predict.predict_images"]], "test_metrics() (in module pssr.predict)": [[28, "pssr.predict.test_metrics"]], "approximate_crappifier() (in module pssr.train)": [[30, "pssr.train.approximate_crappifier"]], "train_crappifier() (in module pssr.train)": [[31, "pssr.train.train_crappifier"]], "train_paired() (in module pssr.train)": [[32, "pssr.train.train_paired"]]}})