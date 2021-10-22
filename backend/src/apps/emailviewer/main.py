#!/usr/bin/env python3

"""
Starting point for emailviewer app.

>>> python apps\emailviewer\main.py

"""

import tarfile
from pathlib import Path

from .emailparser import simple_parser

# Local variables, including data directory and name of tarfile
# to process.
DATA_DIR = Path(".").joinpath("data")
TAR_GZ_FILEPATH: str = "sampleEmails.tar.gz"


class EmailContent:
    """Class for capturing processed email content.
    """
    def __init__(self, filename: str, file_content: dict):
        self.filename = filename
        self.file_content = file_content

    def __new__(cls, filename: str, file_content: dict):
        return cls(filename, file_content)


def get_filename(t: tarfile.TarFile) -> str:
    if "/" in t.name:
        return t.name.split("/")[-1]
    return t.name

def _file_processor(email_list: list):
    """Return list of processed email objects.
    """
    # Open local tarfile
    with tarfile.open(DATA_DIR.joinpath(TAR_GZ_FILEPATH), mode="r:gz") as tarf:
        # Iterate across all members
        for file_member in tarf.getmembers():
            # Check if member is file object.
            if file_member.isfile():
                # Retrieve name of file.
                tarfile_name = get_filename(file_member.name)

                # Extract file as bytes object.
                data = tarf.extractfile(file_member).read()

                # Process bytes object.
                result = simple_parser(data)

                # Append results to list.
                email_list.append(
                    EmailContent(tarfile_name, result)
                )

def retrieve_messages() -> list:
    _emails = list()
    _file_processor(_emails)
    return _emails
