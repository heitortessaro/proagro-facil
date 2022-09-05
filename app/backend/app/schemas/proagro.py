from datetime import date
from pydantic import BaseModel, EmailStr, Field


class RegisterSchema(BaseModel):
    name: str = Field(...)
    email: EmailStr = Field(...)
    cpf: str = Field(...)
    latitude: float = Field(...)
    longitude: float = Field(...)
    type: str = Field(...)
    date: date = Field(...)
    event: str = Field(...)


def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}
