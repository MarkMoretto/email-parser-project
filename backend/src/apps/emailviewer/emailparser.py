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
from os import linesep
# List of fields to use when parsing email message.
FIELD_LIST = ["To", "From", "Date", "Subject", "Message-ID"]

def clean_line(string: str) -> str:
    return str(string).strip()

def repattern(tkn: str) -> str:
    """Return regular expression with specified token parameter.
    """
    return rf"{tkn}:\s*?(.+)\n?"

def re_pattern_full(tokens: list) -> str:
    """Return regular expression with specified token parameter.
    """
    agg_tokens = "|".join([rf"\b{token}\b" for token in tokens])
    return rf"^(?:{agg_tokens}):\s*?(.+)\n?"

def make_fieldmap(iterable: list) -> dict:
    """Return key-value collection of lightly-processed field names.
    """
    return {k:str(k).replace("-", "") for k in iterable}


def simple_parser(data: bytes, fieldlist: list = FIELD_LIST) -> dict:
    """Return key-value collection of tokens and related content for a 
    given line in an email message.
    """
    if hasattr(data, "decode"):
        data = data.decode("utf-8")

    lines = data.strip().split(linesep)

    fields = tuple(fieldlist)
    n_fields = len(fields)
    output = dict.fromkeys(fieldlist, "")

    match_count = 0
    for line in lines:
        # Exit early if all matches complete.
        if match_count == n_fields:
            break

        tmp_line = clean_line(line)
        if tmp_line.startswith(fields) and ":" in tmp_line:
            args = re.split(r":\s*", tmp_line, maxsplit=1)
            if len(args) == 2:
                token, content = args
                output[token] = content
                match_count += 1

    return output
