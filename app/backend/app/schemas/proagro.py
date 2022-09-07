from pydantic import BaseModel, EmailStr, Field


class RegisterSchema(BaseModel):
    name: str = Field(...)
    email: EmailStr = Field(...)
    cpf: str = Field(...)
    latitude: float = Field(...)
    longitude: float = Field(...)
    type: str = Field(...)
    date: str = Field(...)
    event: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "name": "teste4",
                "email": "teste@teste.com",
                "cpf": "03214598678",
                "latitude": "56",
                "longitude": "55",
                "type": "milho",
                "date": "2022-10-25",
                "event": "granizo",
            }
        }
