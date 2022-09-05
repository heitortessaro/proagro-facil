from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from app.model.proagro import (
  add_register
)

from app.schemas.proagro import (
  ErrorResponseModel,
  ResponseModel,
  RegisterSchema
)

router = APIRouter()

@router.post("/", response_description="Adiciona um novo registro de evento à base de dados")
async def add_register_data(register: RegisterSchema = Body(...)):
    register = jsonable_encoder(register)
    new_register = await add_register(register)
    return ResponseModel(new_register, "Registro de evento cadastrado com sucesso.")




@router.get("/ping")
async def pong():
    # some async operation could happen here
    # example: `notes = await get_all_notes()`
    return {"ping": "pong!"}