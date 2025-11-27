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
  """
  Extract simple parameter update suggestions from a user message using heuristics.
  
  Scans the provided message for informal hints about dimensions or positioning and returns suggested parameter deltas suitable for downstream planning.
  
  Parameters:
      message (str): The user or system message to analyze for hints (e.g., width or move instructions).
  
  Returns:
      list[ParamDelta]: Suggested parameter updates (for example, `cabinets.primary.width` or `cabinets.primary.position`). Returns an empty list if no suggestions are found.
  """
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
    """
    Initialize the orchestrator with a tool registry and compile the planning/execution state graph.
    
    Builds a StateGraph for AgentState with two nodes—"plan" (bound to plan_intent) and "act" (bound to execute_tools)—and connects START -> "plan" -> "act" -> END, then compiles the graph and stores it on the instance.
    """
    self.tools = tools
    builder = StateGraph(AgentState)
    builder.add_node("plan", self.plan_intent)
    builder.add_node("act", self.execute_tools)
    builder.add_edge(START, "plan")
    builder.add_edge("plan", "act")
    builder.add_edge("act", END)
    self.graph = builder.compile()

  async def plan_intent(self, state: AgentState) -> AgentState:
    """
    Builds or updates the agent intent by extracting heuristic parameter deltas from the latest user message.
    
    Parameters:
        state (AgentState): Current agent state; the function reads the last entry of `state["messages"]` and merges any existing `state["intent"]`.
    
    Returns:
        AgentState: A new state mapping containing an updated "intent" with:
            - "message": the last message text
            - "proposed_deltas": list of delta dictionaries produced by heuristic_param_deltas
            - "goals": preserved from the previous intent (if any)
            - "macro": preserved from the previous intent (if any)
    """
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
    """
    Execute planned parameter deltas, goals, and macro through the registered tool registry and attach the resulting tool calls to the agent state.
    
    Parameters:
        state (AgentState): Current agent state; expected to contain an `intent` mapping which may include `proposed_deltas`, `goals`, `macro`, and optionally `projectId`.
    
    Returns:
        AgentState: The same state dictionary with its `"tool_calls"` key set to the list of ToolCall objects returned by the tool execution. If tool execution raises an exception, `"tool_calls"` will contain a single error ToolCall with id `"planner-error"` and status `"failed"`.
    """
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
    """
    Run planning for the given intent payload and optionally execute the resulting tool plan, then aggregate and return the planner result.
    
    Parameters:
        payload (IntentPayload): The incoming intent data containing role, message, projectId, and optional goals.
        execute_tools (bool): If True, execute the planning+execution graph; if False, run only the planning step.
    
    Returns:
        PlannerResult: An object containing:
            - reply: A human-facing reply summarizing the outcome.
            - proposedDeltas: List of validated `ParamDelta` objects produced by planning.
            - toolCalls: List of `ToolCall` records produced during execution (may be empty).
            - validatedState: The last validated state extracted from tool calls, or `None` if none.
            - constraintSummary: The last extracted constraint summary from tool calls, or `None` if none.
    """
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
    """
    Process a chat turn by converting the chat request into an intent payload and running the planner with tool execution.
    
    Parameters:
        payload (ChatTurnRequest): The incoming chat turn to process.
    
    Returns:
        PlannerResult: The planner result containing the reply, proposed deltas, tool calls, validated state, and constraint summary.
    """
    base = await self.run(IntentPayload(**payload.model_dump()), execute_tools=True)
    return base