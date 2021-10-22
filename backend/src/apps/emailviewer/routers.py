

from pydantic import BaseModel
from fastapi import APIRouter, Body, Request, HTTPException, status
from fastapi.responses import JSONResponse, ORJSONResponse
from fastapi.encoders import jsonable_encoder

from .models import (
    EmailMessage,
)

email_router = APIRouter(prefix="/message")


### BEGIN: GENERIC ROUTER ###


    # -- [R]etrieve -- #

@router.get("/messages/all", response_model = List[EmailMessage], response_description="messages:list-all")
async def list_messages(request: Request):
    """Show all records for People collection.
    
    Returns - List of Email Messages.
    """
    collection = request.app.db["people"]

    items = []

    for doc in await collection.find().to_list(length=100):
        items.append(doc)
    return items


@router.get("/people/{id}", response_model = PersonMasked, response_description="people:list-one")
async def show_item(id: str, request: Request):
    """Show attributes for single Person record based on ID value..
    
    Returns - Person (masked) record.
    """
    collection = request.app.db["people"]

    if (item_ := await collection.find_one({"_id": id})) is not None:
        return item_

    raise HTTPException(status_code=404, detail=f"Item ID {id} not found")

# -- / [R]etrieve -- #

# -- [U]pdate -- #


@router.put("/{collection_name}/update/{id}", response_description="people:update-one")
async def update_item(id: str, collection_name: str, request: Request, item: UpdatePerson = Body(...)):
    """Update attributes for Person record based on ID value..
    
    Returns - Person (masked) record.
    """

    person_ = {k: v for k, v in person.dict().items() if not v is None}

    __collection = request.app.db["people"]

    if len(item_) >= 1:
        __update_result = await __collection.update_one(
            {"_id": id},
            {"$set": person_}
        )

    if __update_result.modified_count == 1:
        if (__updated_item := await __collection.find_one({"_id": id})) is not None:
            return __updated_item

    if (__existing_item := await __collection.find_one({"_id": id})) is not None:
        return __existing_item

    raise HTTPException(status_code=404, detail=f"Item ID {id} not found!")

# -- / [U]pdate -- #


# -- [D]elete -- #

@router.delete("/{collection_name}/delete/{id}", response_description="Delete item.")
async def delete_task(id: str, collection_name: str, request: Request):
    collection = request.app.db[collection_name]

    delete_result = await collection.delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=404, detail=f"Person {id} not found!")

    # -- / [D]elete -- #