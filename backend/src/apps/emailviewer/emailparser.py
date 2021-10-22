#!/usr/bin/env python3

__all__ = [
    "process_message",
]
"""
Purpose: Parse email
Date created: 2021-10-21

Contributor(s):
    Mark M.

Require:
    * To
    * From
    * Date
    * Subject
    * Message-ID
"""

import re

# List of fields to use when parsing email message.
FIELD_LIST = ["To", "From", "Date", "Subject", "Message-ID"]

    

def repattern(tkn: str) -> str:
    """Return regular expression with specified token parameter.
    """
    return rf"{tkn}:\s*?(.+)\n"

def make_fieldmap(iterable: list) -> dict:
    """Return key-value collection of lightly-processed field names.
    """
    return {k:str(k).replace("-", "") for k in iterable}


def simple_parser(data: bytes, fieldlist: list = FIELD_LIST) -> dict:
    """Return key-value collection of tokens and related content for a 
    given line in an email message.
    """
    d = data.decode("utf-8")

    fields = tuple(fieldlist)
    output = dict.fromkeys(field_list, "")

    for line in d.strip().split("\n"):
        tmp_line = str(line).lstrip()
        if tmp_line.startswith(fields):
            args = re.split(r":\s*", tmp_line, maxsplit=1)
            if len(args) == 2:
                token, content = args
                output[token] = content

    return output

