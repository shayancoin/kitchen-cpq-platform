from __future__ import annotations

import logging

import httpx
import structlog
from fastapi import FastAPI
from pythonjsonlogger import jsonlogger

from .agents import PlannerOrchestrator
from .audit import AuditLogger
from .config import Settings, get_settings
from .routers import design, manufacturing
from .tools import ToolRegistry


def setup_logging() -> None:
  logger = logging.getLogger()
  logger.setLevel(logging.INFO)
  handler = logging.StreamHandler()
  formatter = jsonlogger.JsonFormatter("%(asctime)s %(levelname)s %(name)s %(message)s")
  handler.setFormatter(formatter)
  logger.handlers = [handler]
  structlog.configure(wrapper_class=structlog.make_filtering_bound_logger(logging.INFO))


def create_app(settings: Settings | None = None) -> FastAPI:
  settings = settings or get_settings()
  setup_logging()
  app = FastAPI(
    title="AI Orchestration Service",
    version=settings.service_version,
    openapi_url="/openapi.json",
  )

  @app.on_event("startup")
  async def startup() -> None:
    client = httpx.AsyncClient(timeout=settings.http_timeout_seconds)
    audit_logger = AuditLogger(settings.audit_log_path)
    tool_registry = ToolRegistry(settings=settings, client=client, audit=audit_logger)
    planner = PlannerOrchestrator(tool_registry)
    app.state.http_client = client
    app.state.audit_logger = audit_logger
    app.state.tool_registry = tool_registry
    app.state.planner = planner

  @app.on_event("shutdown")
  async def shutdown() -> None:
    client: httpx.AsyncClient = app.state.http_client
    await client.aclose()

  app.include_router(design.router)
  app.include_router(manufacturing.router)
  return app


app = create_app()

