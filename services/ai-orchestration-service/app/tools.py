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
    """
    Initialize the ToolRegistry with runtime configuration, an HTTP client, and an audit logger.
    
    Stores references to settings, an HTTP client used for external tool requests, and an AuditLogger used to record tool interaction events.
    """
    self.settings = settings
    self.client = client
    self.audit = audit

  async def call_param_engine(self, project_id: str, deltas: List[ParamDelta]) -> ToolCall:
    """
    Send parameter deltas to the param engine service and return a ToolCall that records the request and outcome.
    
    Parameters:
        project_id (str): Identifier of the project whose parameters are being modified.
        deltas (List[ParamDelta]): List of parameter deltas to apply.
    
    Returns:
        ToolCall: A ToolCall instance initialized with the request arguments and later updated with status (`"succeeded"` or `"failed"`), `result` on success, or `error` on failure.
    """
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
    """
    Request layout suggestions from the optimizer service and return a ToolCall that records the request and its outcome.
    
    Parameters:
        project_id (str): Identifier of the project for which layouts are being requested.
        goals (Dict[str, Any]): Optimization goals payload passed to the optimizer (arbitrary goal keys and values expected by the service).
    
    Returns:
        ToolCall: A ToolCall populated with the request arguments. On success the ToolCall.status is `"succeeded"` and ToolCall.result contains the optimizer response; on failure the ToolCall.status is `"failed"` and ToolCall.error contains the error message.
    """
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
    """
    Call the CAD service to generate a CAD macro and return a ToolCall recording the interaction.
    
    Parameters:
        macro (str): CAD macro content or identifier; validated before sending.
    
    Returns:
        ToolCall: A ToolCall with id "cad-macro". If the request succeeds, `status` is "succeeded" and `result` contains the service response; if it fails, `status` is "failed" and `error` contains the error string.
    """
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
    """
    Send parameter deltas to the pricing service to simulate their effect and return a ToolCall describing the request and outcome.
    
    Parameters:
        project_id (str): Identifier of the project for which the pricing simulation is requested.
        deltas (List[ParamDelta]): List of parameter changes to simulate.
    
    Returns:
        ToolCall: A ToolCall representing the pricing simulation request; on success its `status` is "succeeded" and `result` contains the service response, on failure its `status` is "failed" and `error` contains the error string. 
    
    """
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
    """
    Orchestrates execution of selected tool calls (param engine, pricing, optimizer, CAD) and returns their results in execution order.
    
    Parameters:
        project_id (str): Identifier of the project the plan applies to.
        deltas (List[ParamDelta]): Parameter changes to apply; when provided, runs the param engine then pricing simulation.
        goals (Optional[Dict[str, Any]]): Optimization goals; when provided, runs the optimizer.
        macro (Optional[str]): CAD macro to generate; when provided, the macro is validated and the CAD macro tool is invoked.
    
    Returns:
        list[ToolCall]: ToolCall objects for each invoked tool in the order they were executed.
    """
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
    """
    Extracts and validates a ParametricState object from a ToolCall's result.
    
    If the ToolCall contains a "state" payload (either a dict or a JSON string), attempts to parse and validate it into a ParametricState. Returns None when no state is present or validation fails.
    
    Returns:
        ParametricState or `None`: The validated ParametricState when extraction succeeds, `None` otherwise.
    """
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
    """
    Extracts and validates a ConstraintSummary from a ToolCall result.
    
    Parameters:
        call (ToolCall): ToolCall whose `result` may include a `"constraints"` key with the constraint payload to validate.
    
    Returns:
        ConstraintSummary: The validated constraints if present and valid, `None` otherwise.
    """
    if not call.result or "constraints" not in call.result:
      return None
    try:
      return ConstraintSummary.model_validate(call.result["constraints"])
    except Exception:  # noqa: BLE001
      return None
