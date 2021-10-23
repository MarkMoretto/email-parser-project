from pathlib import Path
import os.path

BASE_PATH = Path(os.path.dirname(__file__))

DATA_DIR = BASE_PATH.joinpath("data")

# print(f"src.aps.emailviewer cwd: {Path.cwd()}")
# print(os.path.dirname(__file__))

