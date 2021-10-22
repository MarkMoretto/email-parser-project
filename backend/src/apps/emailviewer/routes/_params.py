# backend\apps\groundspeed\routes\_params.py

"""
Summary: Depency classes.
Notes: This module is mainly about flexibility.  Almost like a mix-n-match for
        http request parameters.
"""

from ..models.enums import CollectionName

from fastapi import Body, Request
from pydantic import BaseModel



# -- DEPENDENCY CLASSES -- #

class GetParams:
    """GET  parameter class:

    Signature:
        (request: Request, collection_name: str) -> None    
    """
    def __init__(self, request: Request, collection_name: CollectionName) -> None:
        self.request = request
        self.collection_name = collection_name 


# class GetIdParams:
#     """GET/HEAD parameter class.
    
#     Signature:
#         (id: str, request: Request, collection_name: str) -> None
#     """   
#     def __init__(self, id: str, request: Request, collection_name: CollectionName) -> None:
#         self.id = id
#         self.request = request
#         self.collection_name = collection_name 


class GetAllParams:
    """Parameters for listing an entire collection of documents.
    
    Signature:
        (request: Request, collection_name: str, skip: int, limit: int, length: int) -> None
    """   
    def __init__(self, request: Request, collection_name: CollectionName, skip: int = 0, limit: int = 0, length: int = None) -> None:
        self.request = request
        self.collection_name = collection_name
        self.skip = skip
        self.limit = limit
        self.length = length


# class CreateParams:
#     """POST/PUT/PATCH parameter class.
    
#     Signature:
#         (request: Request, collection_name: str, item: BodyModel) -> None
#     """   
#     def __init__(self, request: Request, collection_name: CollectionName,  item: BaseModel = Body(...)) -> None:
#         self.request = request
#         self.collection_name = collection_name
#         self.item = item


# class UpdateParams:
#     """POST/PUT/PATCH parameter class.
    
#     Signature:
#         (id: str, request: Request, collection_name: str, item: BodyModel) -> None
#     """   
#     def __init__(self, id: str, request: Request, collection_name: CollectionName,  item: BaseModel = Body(...)) -> None:
#         self.id = id
#         self.request = request
#         self.collection_name = collection_name
#         self.item = item



# -- DEPENDENCY CLASSES -- #

# class RequestCollectionParams(RequestMixin, CollectionNameMixin):
#     """GET parameter set:
#     * request: Request
#     * collection_name: str
#     """
#     def __init__(self, *args, **kwargs) -> None:
#         self.request = request
#         self.collection_name = collection_name


# class GenericGetHeadParams(GenericGetParams):
#     """GET/HEAD class.
    
#     Signature:
#         (id, request, collection_name) -> None
#     """    
#     def __init__(self, *args, **kwargs) -> None:
#         self.id = id
#         self.request = request
#         self.collection_name = collection_name


# class GenericCreateParams(GenericGetParams):
#     def __init__(self, request: Request = None, collection_name: str = None, item: BaseModel = Body(...)) -> None:
#         self.request = request
#         self.collection_name = collection_name
#         self.item = item
