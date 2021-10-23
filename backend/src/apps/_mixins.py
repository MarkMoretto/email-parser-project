#!/usr/bin/env python3

__all__ = [
    "VerboseActionsMixin",
]

class VerboseActionsMixin:
    """Mixin class for adding granulaity to class operations.
    """
    
    __slots__ = ()

    def __getitem__(self, key):
        print(f"Getting {key}")
        return super().__getitem__(key)

    def __setitem__(self, key, value):
        print(f"Setting {key} = {value}")
        return super().__setitem__(key, value)

    def __delitem__(self, key):
        print(f"Deleting {key}")
        return super().__delitem__(key)

