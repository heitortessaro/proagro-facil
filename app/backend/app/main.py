from fastapi import FastAPI

from app.routes.register import router as RegisterRouter
from app.routes import ping

app = FastAPI()

app.include_router(RegisterRouter, tags=["Register"], prefix="/register")
app.include_router(ping.router)


