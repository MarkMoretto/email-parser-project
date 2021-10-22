
# backend\apps\groundspeed\routes\person.py

# from typing import Optional, List
from .._types import Optional, List
from fastapi import APIRouter, Body, Depends, HTTPException, Request, status
from fastapi.responses import JSONResponse, ORJSONResponse, PlainTextResponse
from fastapi.encoders import jsonable_encoder


from starlette.status import HTTP_400_BAD_REQUEST

from pydantic import BaseModel

from ..models.allergy import Allergy
from ..models.policyholder import Policyholder

from ._params import CreateParams, GetAllParams, GetParams, GetIdParams, UpdateParams

router = APIRouter()




class GenericGetHeadParams:
    def __init__(self, id: str = None, request: Request = None, collection_name: str = None):
        self.id = id
        self.request = request
        self.collection_name = collection_name




# -- [R]etrieve -- #

@router.get("/{collection_name}/all", response_description="item:list-all")
async def list_documents(params: GetParams = Depends(), skip: int = 0, limit: int = 0, length: int = None):
    """Show all documents with a collection.  
    
    Parameters
    ----------
    skip : int
            The number of documents to omit (from the start of the result set) when returning the results
    limit : int
            The maximum number of results to return. A limit of 0 (the default) is equivalent to setting no limit.
    length : int
            The maximum number of documents to return for this call, or None.  Default: None.
    """
    __collection = params.request.app.db[params.collection_name]

    __items = list()

    # .find() returns MotorCursor:
    #   https://motor.readthedocs.io/en/stable/api-tornado/cursors.html
    # for doc in await __collection.find().to_list(limit):
    for doc in await __collection.find(skip = skip, limit = limit).to_list(length = length):
        __items.append(doc)

    return __items


# -- Count Documents in Collection -- #
@router.get("/{collection_name}/count/items", response_description="item:count", response_class=ORJSONResponse)
async def item_count(params: GetParams = Depends()):
    __collection = params.request.app.db[params.collection_name]
    
    if (__doc_count := await __collection.count_documents({ })) is not None:
        return ORJSONResponse(status_code=status.HTTP_200_OK, content= {"count" : __doc_count})
        
    
    raise HTTPException(status_code=404, detail=f"Count not count items from {params.collection_name} collection.")

