from fastapi import APIRouter, Body, HTTPException
from fastapi.encoders import jsonable_encoder

from app.model.proagro import (
  add_register,
  fetch_one_register,
)

from app.schemas.proagro import (
  ErrorResponseModel,
  ResponseModel,
  RegisterSchema,
)

router = APIRouter()

@router.post(
  "/",
  status_code=201,
  response_description="Adiciona um novo registro de evento à base de dados",
  )
async def add_register_data(register:RegisterSchema = Body(...)):
    register = jsonable_encoder(register)
    new_register = await add_register(register)
    return new_register

@router.get(
  "/{id}",
  status_code=200,
  response_description="Retorna o registro de evento com o id fornecido",
  )
async def get_by_id(id):
    response = await fetch_one_register(id)
    if response:
        return response 
    raise HTTPException(404, f"Não existe registro de evento com o id {id}")


@router.get("/ping")
async def pong():
    # some async operation could happen here
    # example: `notes = await get_all_notes()`
    return {"ping": "pong!"}