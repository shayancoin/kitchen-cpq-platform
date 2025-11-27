from __future__ import annotations

import json
from typing import Any, Dict, List, Optional

import httpx
from fastapi import HTTPException, status

from .audit import AuditLogger
from .config import Settings
from .guardrails import assert_no_direct_manufacturing, validate_cad_macro, validate_param_deltas
from .models import ConstraintSummary, ParamDelta, ParametricState, ToolCall, ToolName


class ToolRegistry:
  def __init__(self, settings: Settings, client: httpx.AsyncClient, audit: AuditLogger):
    self.settings = settings
    self.client = client
    self.audit = audit

  async def call_param_engine(self, project_id: str, deltas: List[ParamDelta]) -> ToolCall:
    validate_param_deltas([delta.model_dump() for delta in deltas])
    payload = {
      "project_id": project_id,
      "deltas": [{"path": d.path, "value_json": json.dumps(d.value)} for d in deltas],
    }
    tool_call = ToolCall(
      id="param-engine",
      tool_name=ToolName.param_engine_apply_delta,
      arguments=payload,
      status="running",
    )
    try:
      resp = await self.client.post(
        f"{self.settings.param_kernel_url}/apply-delta",
        json=payload,
        timeout=10.0,
      )
      resp.raise_for_status()
      data = resp.json()
      tool_call.status = "succeeded"
      tool_call.result = data
      self.audit.log(event="tool.paramEngine.applyDelta", payload={"request": payload, "response": data})
    except Exception as exc:  # noqa: BLE001
      tool_call.status = "failed"
      tool_call.error = str(exc)
      raise
    return tool_call

  async def call_optimizer(self, project_id: str, goals: Dict[str, Any]) -> ToolCall:
    payload = {"project_id": project_id, "goals": goals, "max_layouts": 3}
    tool_call = ToolCall(
      id="optimizer",
      tool_name=ToolName.optimizer_solve_layout,
      arguments=payload,
      status="running",
    )
    try:
      resp = await self.client.post(f"{self.settings.optimizer_url}/suggest-layouts", json=payload)
      resp.raise_for_status()
      data = resp.json()
      tool_call.status = "succeeded"
      tool_call.result = data
      self.audit.log(event="tool.optimizer.solveLayout", payload={"request": payload, "response": data})
    except Exception as exc:  # noqa: BLE001
      tool_call.status = "failed"
      tool_call.error = str(exc)
      raise
    return tool_call

  async def call_cad_macro(self, macro: str) -> ToolCall:
    validate_cad_macro(macro)
    payload = {"macro": macro}
    tool_call = ToolCall(
      id="cad-macro",
      tool_name=ToolName.cad_generate_macro,
      arguments=payload,
      status="running",
    )
    try:
      resp = await self.client.post(f"{self.settings.cad_service_url}/generate-macro", json=payload)
      resp.raise_for_status()
      data = resp.json()
      tool_call.status = "succeeded"
      tool_call.result = data
      self.audit.log(event="tool.cad.generateCadMacro", payload={"request": payload, "response": data})
    except Exception as exc:  # noqa: BLE001
      tool_call.status = "failed"
      tool_call.error = str(exc)
      raise
    return tool_call

  async def call_pricing_sim(self, project_id: str, deltas: List[ParamDelta]) -> ToolCall:
    validate_param_deltas([d.model_dump() for d in deltas])
    payload = {"project_id": project_id, "deltas": [d.model_dump() for d in deltas]}
    tool_call = ToolCall(
      id="pricing",
      tool_name=ToolName.pricing_simulate_change,
      arguments=payload,
      status="running",
    )
    try:
      resp = await self.client.post(f"{self.settings.pricing_service_url}/simulate-change", json=payload)
      resp.raise_for_status()
      data = resp.json()
      tool_call.status = "succeeded"
      tool_call.result = data
      self.audit.log(event="tool.pricing.simulateChange", payload={"request": payload, "response": data})
    except Exception as exc:  # noqa: BLE001
      tool_call.status = "failed"
      tool_call.error = str(exc)
      raise
    return tool_call

  async def execute_plan(
    self,
    *,
    project_id: str,
    deltas: List[ParamDelta],
    goals: Optional[Dict[str, Any]] = None,
    macro: Optional[str] = None,
  ) -> list[ToolCall]:
    tool_calls: list[ToolCall] = []
    if deltas:
      tool_calls.append(await self.call_param_engine(project_id, deltas))
      tool_calls.append(await self.call_pricing_sim(project_id, deltas))
    if goals:
      tool_calls.append(await self.call_optimizer(project_id, goals))
    if macro:
      assert_no_direct_manufacturing(macro)
      tool_calls.append(await self.call_cad_macro(macro))
    return tool_calls

  def extract_validated_state(self, call: ToolCall) -> Optional[ParametricState]:
    if not call.result or "state" not in call.result:
      return None
    state_json = call.result.get("state", {}).get("json") if isinstance(call.result.get("state"), dict) else None
    state_obj = call.result.get("state") if isinstance(call.result.get("state"), dict) else None
    payload = state_json or state_obj
    if not payload:
      return None
    try:
      parsed = json.loads(payload) if isinstance(payload, str) else payload
      return ParametricState.model_validate(parsed)
    except Exception:  # noqa: BLE001
      return None

  def extract_constraints(self, call: ToolCall) -> Optional[ConstraintSummary]:
    if not call.result or "constraints" not in call.result:
      return None
    try:
      return ConstraintSummary.model_validate(call.result["constraints"])
    except Exception:  # noqa: BLE001
      return None
