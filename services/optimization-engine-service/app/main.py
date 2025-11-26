from fastapi import FastAPI

app = FastAPI(title="Optimization Engine Service")


@app.get("/healthz")
async def healthz() -> dict:
  return {"status": "ok"}


