import os
import motor.motor_asyncio

DATABASE_URL = os.getenv("DATABASE_URL")

client = motor.motor_asyncio.AsyncIOMotorClient(DATABASE_URL)

database = client.proagro

proagro_collection = database.get_collection("proagro_collection")
