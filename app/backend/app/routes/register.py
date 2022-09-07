from fastapi import APIRouter, Body, HTTPException
from fastapi.encoders import jsonable_encoder

from app.model.proagro import (
    add_register,
    fetch_one_register,
    fetch_all,
    delete_register,
    update_register,
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
async def add_register_data(register: RegisterSchema = Body(...)):
    register = jsonable_encoder(register)
    new_register = await add_register(register)
    return new_register


@router.get(
    "/",
    status_code=200,
    response_description="Retorna todos os registros já cadastrados",
)
async def get_all():
    response = await fetch_all()
    print("chegou")
    if response:
        return response
    raise HTTPException(404, "Não foram encontrados registros de eventos.")


@router.get(
    "/{id}",
    status_code=200,
    response_description="Retorna o registro de evento com o id fornecido",
)
async def get_by_id(id):
    response = await fetch_one_register(id)
    if response:
        return response
    return HTTPException(404, f"Não existe registro de evento com o id {id}")


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
    register = jsonable_encoder(register)
    if len(register) < 1:
        raise HTTPException(
            400, "Não foram encaminhados os dados atualizados do evento."
        )
    print("passou da validação do body")
    response_find = await fetch_one_register(id)
    if not response_find:
        print("Testando")
        raise HTTPException(404, f"Não existe registro de evento com o id {id}")
    updated_register = await update_register(id, register)
    print(updated_register)
    if updated_register:
        return updated_register
    raise HTTPException(500, "Não foi possível realizar a atualização.")
