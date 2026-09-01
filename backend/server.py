import os
import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

load_dotenv()
app=FastAPI(title="PURPLE TRASH AI API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

class Chat(BaseModel):
    message:str

@app.get("/health")
def health(): return {"status":"online","service":"purple-trash"}

@app.post("/chat")
async def chat(req:Chat):
    base=os.getenv("AI_BASE_URL","").rstrip("/")
    key=os.getenv("AI_API_KEY","")
    model=os.getenv("AI_MODEL","")
    if not (base and key and model):
        return {"reply":"AI provider belum dikonfigurasi. Isi backend/.env berdasarkan .env.example."}
    headers={"Authorization":f"Bearer {key}","Content-Type":"application/json"}
    payload={"model":model,"messages":[{"role":"user","content":req.message}]}
    async with httpx.AsyncClient(timeout=60) as client:
        r=await client.post(f"{base}/chat/completions",headers=headers,json=payload)
    if r.status_code>=400: raise HTTPException(r.status_code,r.text)
    data=r.json()
    return {"reply":data["choices"][0]["message"]["content"]}
