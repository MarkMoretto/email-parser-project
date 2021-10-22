#!/usr/bin/env python3


from enum import auto, Enum, IntEnum


# Generators
class AutoEnum(Enum):
    def __new__(cls, *args):
        v = len(cls.__members__)
        obj = object.__new__(cls)
        obj._value_ = v
        return obj


class AutoString(Enum):
    """Return capitalized enum string value.
    """
    def _generate_next_value_(name, start, count, last_values):
        return str(name)


class AutoStringHyph(Enum):
    """Return capitalized enum string value.
    """
    def _generate_next_value_(name, start, count, last_values):
        return str(name).replace("_", "-")


class AutoStringTitle(Enum):
    """Return capitalized enum string value.
    """
    def _generate_next_value_(name, start, count, last_values):
        tmp = " ".join(str(name).split("_"))
        return tmp.title()


# Core Enums
class CollectionName(str, Enum):
    """Names of collections that can be used in the CRUD process.

    Used as drop-down menu when checking out ~/docs.
    """
    emailmessage = "emailmessage"


class YesNoMaybe(str, Enum):
    """Option enum for basic decisions."""
    # NO = auto()
    # YES = auto()
    # OTHER = auto()
    NO = "No"
    YES = "Yes"
    OTHER = "Other"