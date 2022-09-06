from app.model.database import proagro_collection
from bson.objectid import ObjectId

# helpers
def register_helper(register) -> dict:
  return{
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
async def fetch_one_register(id):
  register = await proagro_collection.find_one({"_id": ObjectId(id)})
  return register_helper(register)

# find all registers
async def fetch_all():
  registers = []
  async for register in proagro_collection.find():
    registers.append(register_helper(register))
  return registers

