from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.routes.register import router as RegisterRouter
from app.routes import ping

app = FastAPI()

# origins = [
#     "http://localhost:3000",
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(RegisterRouter, tags=["Register"], prefix="/register")
app.include_router(ping.router)
