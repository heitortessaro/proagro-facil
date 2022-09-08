from fastapi import APIRouter, Body, HTTPException
from fastapi.encoders import jsonable_encoder
import json

from app.model.proagro import (
    add_register,
    fetch_one_register,
    fetch_all,
    fetch_registers_by_cpf,
    fetch_registers_by_date,
    delete_register,
    update_register,
)

from app.services.validations import (
    validate_new_register,
)

from app.schemas.proagro import (
    RegisterSchema,
)

router = APIRouter()


@router.post(
    "/",
    status_code=201,
    response_description="Adiciona um novo registro de evento à base de dados",
)
async def add_register_data(register: RegisterSchema = Body(...)):
    register = jsonable_encoder(register)
    registers_same_date = await fetch_registers_by_date(register["date"])
    print(registers_same_date)
    veracity = False
    if len(registers_same_date) > 0:
        veracity = validate_new_register(register, registers_same_date)
    new_register = await add_register(register)
    new_register["veracity"] = veracity
    return new_register


@router.get(
    "/",
    status_code=200,
    response_description="Retorna todos os registros já cadastrados",
)
async def get_all():
    response = await fetch_all()
    if response:
        return response
    raise HTTPException(404, "Não foram encontrados registros de eventos.")


@router.get(
    "/cpf/{cpf}",
    status_code=200,
    response_description="Retorna os registros de eventos associados ao cpf",
)
async def get_by_id(cpf):
    response = await fetch_registers_by_cpf(cpf)
    if response:
        return response
    raise HTTPException(
        404, f"Não existem registros de evento relacionados ao cpf {cpf}"
    )


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


@router.delete(
    "/{id}",
    status_code=204,
    response_description="Apaga o registro de evento com o id fornecido",
)
async def delete_by_id(id):
    response = await delete_register(id)
    if response:
        return True
    raise HTTPException(404, f"Não existe registro de evento com o id {id}")


@router.put(
    "/{id}",
    status_code=200,
    response_description="Atualiza o registro de evento com o id fornecido usando os dados do body",
)
async def update_by_id(id, register: RegisterSchema = Body(...)):
    print("---------------")
    register = jsonable_encoder(register)
    if len(register) < 1:
        raise HTTPException(
            400, "Não foram encaminhados os dados suficientes do evento."
        )
    response_find = await fetch_one_register(id)
    if not response_find:
        raise HTTPException(404, f"Não existe registro de evento com o id {id}")
    updated_register = await update_register(id, register)
    if updated_register:
        return updated_register
    raise HTTPException(500, "Não foi possível realizar a atualização.")
