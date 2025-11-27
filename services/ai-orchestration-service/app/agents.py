from __future__ import annotations

import re
from typing import Any, Dict, List, Optional, TypedDict

from langgraph.graph import END, START, StateGraph

from .models import (
  ChatTurnRequest,
  IntentPayload,
  ParamDelta,
  PlannerResult,
  ToolCall,
  ToolName,
)
from .tools import ToolRegistry


class AgentState(TypedDict):
  messages: List[Dict[str, Any]]
  intent: Optional[Dict[str, Any]]
  tool_calls: List[ToolCall]


def heuristic_param_deltas(message: str) -> list[ParamDelta]:
  """Simple heuristic mapper for demo/testing without an LLM."""
  deltas: list[ParamDelta] = []
  width_match = re.search(r"(?:width|wider)\s*(\d{2,4})", message, re.IGNORECASE)
  if width_match:
    deltas.append(ParamDelta(path="cabinets.primary.width", value=float(width_match.group(1))))
  position_match = re.search(r"(?:move|shift).*?(\d{2,4})", message, re.IGNORECASE)
  if position_match:
    deltas.append(ParamDelta(path="cabinets.primary.position", value=float(position_match.group(1))))
  return deltas


class PlannerOrchestrator:
  def __init__(self, tools: ToolRegistry):
    self.tools = tools
    builder = StateGraph(AgentState)
    builder.add_node("plan", self.plan_intent)
    builder.add_node("act", self.execute_tools)
    builder.add_edge(START, "plan")
    builder.add_edge("plan", "act")
    builder.add_edge("act", END)
    self.graph = builder.compile()

  async def plan_intent(self, state: AgentState) -> AgentState:
    last_message = state["messages"][-1]
    text = last_message.get("content", "")
    deltas = heuristic_param_deltas(text)
    base_intent = state.get("intent") or {}
    intent = {
      **base_intent,
      "message": text,
      "proposed_deltas": [delta.model_dump() for delta in deltas],
      "goals": base_intent.get("goals"),
      "macro": base_intent.get("macro"),
    }
    return {"intent": intent}

  async def execute_tools(self, state: AgentState) -> AgentState:
    intent = state.get("intent") or {}
    deltas_raw = intent.get("proposed_deltas") or []
    goals = intent.get("goals")
    macro = intent.get("macro")
    deltas = [ParamDelta.model_validate(d) for d in deltas_raw]
    project_id = intent.get("projectId") or "unknown"
    tool_calls: list[ToolCall] = []
    if deltas or goals or macro:
      try:
        tool_calls = await self.tools.execute_plan(
          project_id=project_id,
          deltas=deltas,
          goals=goals,
          macro=macro,
        )
      except Exception as exc:  # noqa: BLE001
        tool_calls.append(
          ToolCall(
            id="planner-error",
            tool_name=ToolName.param_engine_apply_delta,
            arguments={"error": str(exc)},
            status="failed",
            error=str(exc),
          )
        )
    state["tool_calls"] = tool_calls
    return state

  async def run(self, payload: IntentPayload, *, execute_tools: bool = True) -> PlannerResult:
    messages = [{"role": payload.role, "content": payload.message}]
    initial_state: AgentState = {
      "messages": messages,
      "intent": {
        "message": payload.message,
        "projectId": payload.projectId,
        "goals": payload.goals.model_dump() if payload.goals else None,
      },
      "tool_calls": [],
    }
    if execute_tools:
      final_state = await self.graph.ainvoke(initial_state)
    else:
      final_state = await self.plan_intent(initial_state)

    tool_calls = final_state.get("tool_calls", [])
    validated_state = None
    constraint_summary = None
    for call in tool_calls:
      candidate_state = self.tools.extract_validated_state(call)
      if candidate_state:
        validated_state = candidate_state
      candidate_constraints = self.tools.extract_constraints(call)
      if candidate_constraints:
        constraint_summary = candidate_constraints

    proposed_deltas = [
      ParamDelta.model_validate(delta) for delta in (final_state.get("intent", {}).get("proposed_deltas") or [])
    ]

    return PlannerResult(
      reply="I prepared a deterministic plan and validated it with the kernels.",
      proposedDeltas=proposed_deltas,
      toolCalls=tool_calls,
      validatedState=validated_state,
      constraintSummary=constraint_summary,
    )

  async def run_chat(self, payload: ChatTurnRequest) -> PlannerResult:
    base = await self.run(IntentPayload(**payload.model_dump()), execute_tools=True)
    return base
