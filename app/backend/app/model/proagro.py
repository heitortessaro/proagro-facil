from fastapi import HTTPException
from app.model.database import proagro_collection
from bson.objectid import ObjectId
from typing import List

# helpers
def register_helper(register) -> dict:
    return {
        "id": str(register["_id"]),
        "name": register["name"],
        "email": register["email"],
        "cpf": register["cpf"],
        "latitude": register["latitude"],
        "longitude": register["longitude"],
        "type": register["type"],
        "date": register["date"],
        "event": register["event"],
    }


# Add a new register into to the database
async def add_register(register_data: dict) -> dict:
    register = await proagro_collection.insert_one(register_data)
    new_register = await proagro_collection.find_one({"_id": register.inserted_id})
    return register_helper(new_register)


# find a register using id
async def fetch_one_register(id: str) -> dict:
    register = await proagro_collection.find_one({"_id": ObjectId(id)})
    return register_helper(register)


# find registers using date
async def fetch_registers_by_date(date: str) -> List[dict]:
    registers = []
    async for register in proagro_collection.find({"date": date}):
        registers.append(register_helper(register))
    return registers


# find registers using date
async def fetch_registers_by_cpf(cpf: str) -> List[dict]:
    registers = []
    async for register in proagro_collection.find({"cpf": cpf}):
        registers.append(register_helper(register))
    return registers


# find all registers
async def fetch_all() -> List[dict]:
    registers = []
    async for register in proagro_collection.find():
        registers.append(register_helper(register))
    return registers


# delete a register
async def delete_register(id: str):
    register = await proagro_collection.find_one({"_id": ObjectId(id)})
    if register:
        await proagro_collection.delete_one({"_id": ObjectId(id)})
        return True
    return False


# update a register with matching id
async def update_register(id: str, data: dict) -> dict:
    updated_register = await proagro_collection.update_one(
        {"_id": ObjectId(id)}, {"$set": data}
    )
    if updated_register:
        return True
    return False
