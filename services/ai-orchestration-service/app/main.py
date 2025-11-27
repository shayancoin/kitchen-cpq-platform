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
  """
  Configure root logging to emit JSON-formatted logs at INFO level and enable structlog filtering.
  
  Sets the root logger level to INFO, replaces its handlers with a StreamHandler that formats records as JSON (timestamp, level, logger name, and message), and configures structlog to filter bound loggers at INFO.
  """
  logger = logging.getLogger()
  logger.setLevel(logging.INFO)
  handler = logging.StreamHandler()
  formatter = jsonlogger.JsonFormatter("%(asctime)s %(levelname)s %(name)s %(message)s")
  handler.setFormatter(formatter)
  logger.handlers = [handler]
  structlog.configure(wrapper_class=structlog.make_filtering_bound_logger(logging.INFO))


def create_app(settings: Settings | None = None) -> FastAPI:
  """
  Create and configure the FastAPI application for the AI Orchestration Service.
  
  Parameters:
      settings (Settings | None): Optional settings to configure the application. If omitted, default settings are loaded.
  
  Returns:
      FastAPI: Configured application instance with startup/shutdown lifecycle handlers, routers registered, and the HTTP client, audit logger, tool registry, and planner stored on `app.state`.
  """
  settings = settings or get_settings()
  setup_logging()
  app = FastAPI(
    title="AI Orchestration Service",
    version=settings.service_version,
    openapi_url="/openapi.json",
  )

  @app.on_event("startup")
  async def startup() -> None:
    """
    Initialize application resources and attach them to app.state.
    
    Creates an HTTPX asynchronous client configured with the application's HTTP timeout, an AuditLogger using the configured audit log path, a ToolRegistry wired with settings, the HTTP client, and the audit logger, and a PlannerOrchestrator backed by that tool registry. Stores these instances on app.state as `http_client`, `audit_logger`, `tool_registry`, and `planner` for use by the application lifecycle.
    """
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
    """
    Close the application's shared HTTP client stored in app.state.
    
    Retrieves the AsyncClient from app.state.http_client and closes it to release network resources.
    """
    client: httpx.AsyncClient = app.state.http_client
    await client.aclose()

  app.include_router(design.router)
  app.include_router(manufacturing.router)
  return app


app = create_app()
