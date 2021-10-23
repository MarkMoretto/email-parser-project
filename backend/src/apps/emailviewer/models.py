# backend/apps/groundspeed/models.py

__all__ = [
    "EmailMessage", # Email Message
    ]


# Built-in
from .._types import List, Optional
from datetime import datetime as dt

# Third-Party
from bson import ObjectId
from pydantic import (
    BaseModel,
    Field, 
    PrivateAttr, 
    ValidationError,
    )


# --- HELPER UTILS --- #

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("ObjectId invalid.")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type = "string")

    # ---/ HELPER UTILS --- #


    # --- MODELS --- #

    # --- EMAIL MESSAGE -- #

class EmailMessage(BaseModel):
    """EmailMessage Updater class."""
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")

    field_to: str = Field(..., max_length = 255, alias="To")
    field_from: str = Field(..., max_length = 255, alias="From")
    field_date: str = Field(..., max_length = 50, alias="Date")
    field_subject: str = Field(..., max_length = 255, alias="Subject")
    field_message_id: str = Field(..., max_length = 50, alias="Message_ID")

    _created_dttm: dt = PrivateAttr(default_factory = dt.now)
    _updated_dttm: dt = PrivateAttr(default_factory = dt.now)

    class Config:
        schema_extra = {
            "examples": [
                {
                    "field_to": "john.smith@exmaple.com",
                    "field_from": "MindsPay<survey@mindspaymails.com>",
                    "field_date": "Wed, 30 Mar 2011 22:34:19 -0500",
                    "field_subject": "Special Offer Up to $3.00 OFF!",
                    "field_message_id": "<MP13016324592rgr01EH10491@example.com>"
                }
            ]
        }

    # --/ EMAIL MESSAGE -- #



    # -- UPDATERS -- #


class UpdateEmailMessage(BaseModel):
    """Class to update Allergy entity."""

    field_to: Optional[str]
    field_from: Optional[str]
    field_date: Optional[str]
    field_subject: Optional[str]
    field_message_id: Optional[str]

    # --/ UPDATERS -- #




# ---/ MODELS --- #