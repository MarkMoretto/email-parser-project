#!/usr/bin/env python3

import orjson
from typing import Optional, List

from pydantic import BaseModel

from fastapi.encoders import jsonable_encoder
from fastapi import APIRouter, Body, Depends, HTTPException, Request, status
from fastapi.responses import ORJSONResponse

from starlette.status import HTTP_400_BAD_REQUEST

from ..emailviewer.main import retrieve_messages

### --- Create APIRouter instance --- ###
# This will be added into the main app API when
# app is initialized.
email_message_router = APIRouter(prefix="/messages")

# Preload data from relevant function.
message_cache = retrieve_messages()
# print(message_cache[0])


@email_message_router.get("", response_class = ORJSONResponse)
async def get_all_messages() -> ORJSONResponse:
    """
    # Retrieve all email messages
    """
    msg = {
        "messages": message_cache
    }
    return ORJSONResponse(status_code=200, content = msg)
