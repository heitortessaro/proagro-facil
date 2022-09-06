import motor.motor_asyncio
from bson.objectid import ObjectId


# MONGO_DETAILS = "mongodb://localhost:27017"

# client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://mongo-heitor:root@cluster0.2eyqb11.mongodb.net/?retryWrites=true&w=majority")

database = client.proagro

proagro_collection = database.get_collection('proagro_collection')