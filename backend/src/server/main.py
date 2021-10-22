#!/usr/bin/env python3

#############################
###--- BEGIN: IMPORTS --- ###
from datetime import datetime as dt

from fastapi import APIRouter, Depends, FastAPI
from fastapi.responses import ORJSONResponse

from starlette.requests import Request
from starlette.exceptions import HTTPException
from starlette.middleware.cors import CORSMiddleware

# Type definitions
from src.apps._types import Optional

# Change dev_settings to prod_settings for production.
from config import dev_settings as settings

# Function to get email messages.
from src.apps import retrieve_messages

## ---/ END: IMPORTS --- ###
############################

### Set app to debug mode via config
# email_app = FastAPI(title=settings.APP_NAME, debug=settings.DEBUG_MODE)

### API init
api = APIRouter(prefix="")


# Errors
async def http_error_handler(request: Request, exc: HTTPException) -> ORJSONResponse:
    return ORJSONResponse({"errors": [exc.detail]}, status_code=exc.status_code)


# Creat app function.
def create_app() -> FastAPI:
    """Return FastAPI app instance.
    """
    _app = FastAPI(title=settings.APP_NAME, debug=settings.DEBUG_MODE)
    _app.include_router(api)
    _app.add_exception_handler(HTTPException, http_error_handler)

    _app.add_middleware(
        CORSMiddleware,
        allow_origins = [
            "http://127.0.0.1:3000",
            "127.0.0.1:3000",
            "http://localhost:3000",
            "localhost:3000",
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],            
        )
    return _app


# BASIC HOME PAGE
@api.get("/", response_class = ORJSONResponse)
async def home() -> ORJSONResponse:
    msg = {
        "message": "Backend is running!",
        "current_dttm": dt.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    return ORJSONResponse(status_code=200, content = msg)


### Create app
email_app = create_app()
