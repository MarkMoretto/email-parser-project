#!/usr/bin/env python3


from typing import Dict, Iterable, Iterator, List, Optional, Union, Tuple

# --- primitives --- #
Integer = int
String = str
Float = float
Number = Union[Integer, Float]

# --- one-dimension collections --- #
IntVec = List[Integer]
FloatVec = List[Float]
NumVec = List[Number]

IntList = List[Integer]
FloatList = List[Float]
NumList = List[Number]

StrList = List[String]

# --- immutable collections --- #
NumStrList = List[Tuple[String, Float]]

# --- multiple iterable --- #
Iterables = Union[Iterable, Iterable]

# --- maps --- #
StrDict = Dict[String, String]
StrNumDict = Dict[String, Number]
NumDict = Dict[Number, Number]
IntDict = Dict[Integer, Integer]
