from __future__ import annotations

from pathlib import Path

import httpx
import pytest
import respx
from fastapi import HTTPException
from httpx import ASGITransport

from app.audit import AuditLogger
from app.config import Settings
from app.main import create_app
from app.tools import ToolRegistry


def build_test_settings(tmp_path: Path) -> Settings:
  """
  Create a Settings instance configured for tests with mocked service URLs and an audit log path.
  
  Parameters:
      tmp_path (Path): Temporary directory in which to place the test audit log file.
  
  Returns:
      Settings: Configuration whose service endpoints point to example hostnames and whose `audit_log_path` is set to `<tmp_path>/audit.log`.
  """
  return Settings(
    param_kernel_url="http://param.example/kernel",
    optimizer_url="http://opt.example/optimizer",
    cad_service_url="http://cad.example/cad",
    pricing_service_url="http://cpq.example/pricing",
    audit_log_path=str(tmp_path / "audit.log"),
  )


@pytest.mark.asyncio
@respx.mock
async def test_design_chat_calls_tools(tmp_path: Path) -> None:
  settings = build_test_settings(tmp_path)
  app = create_app(settings)
  await app.router.startup()
  transport = ASGITransport(app=app)
  async with httpx.AsyncClient(transport=transport, base_url="http://test") as client:
    respx.post("http://param.example/kernel/apply-delta").mock(
      return_value=httpx.Response(
        200,
        json={
          "state": {"json": '{"projectId":"proj-1","cabinets": [], "constraints": {"violations": []}}'},
          "constraints": {"hasBlockingErrors": False, "violations": []},
        },
      )
    )
    respx.post("http://cpq.example/pricing/simulate-change").mock(return_value=httpx.Response(200, json={"ok": True}))
    response = await client.post(
      "/design/chat",
      json={"projectId": "proj-1", "message": "make width 900", "role": "user", "history": []},
    )
    assert response.status_code == 200
    data = response.json()
    tool_names = {call["tool_name"] for call in data["toolCalls"]}
    assert "paramEngine.applyDelta" in tool_names
    assert "pricingService.simulateChange" in tool_names
    assert data["validatedState"]["projectId"] == "proj-1"
  await app.router.shutdown()


@pytest.mark.asyncio
async def test_guardrail_blocks_prohibited_macro(tmp_path: Path) -> None:
  """
  Verifies that invoking a prohibited CAD macro through the ToolRegistry is blocked with an HTTPException.
  
  Sets up a ToolRegistry using test settings, an AsyncClient, and an AuditLogger, then asserts that calling `call_cad_macro` with a disallowed macro string raises `HTTPException`.
  """
  settings = build_test_settings(tmp_path)

  async with httpx.AsyncClient() as client:
    registry = ToolRegistry(
      settings=settings,
      client=client,
      audit=AuditLogger(str(tmp_path / "audit.log")),
    )
    with pytest.raises(HTTPException):
      await registry.call_cad_macro("M30\nG53 X0 Y0")


@pytest.mark.asyncio
@respx.mock
async def test_interpret_intent_is_dry_run(tmp_path: Path) -> None:
  settings = build_test_settings(tmp_path)
  app = create_app(settings)
  await app.router.startup()
  transport = ASGITransport(app=app)
  async with httpx.AsyncClient(transport=transport, base_url="http://test") as client:
    response = await client.post(
      "/design/interpret-intent",
      json={"projectId": "proj-1", "message": "nudge cabinet", "role": "user"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["toolCalls"] == []
  await app.router.shutdown()