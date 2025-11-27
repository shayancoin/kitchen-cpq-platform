from __future__ import annotations

from fastapi import APIRouter, Depends, Request

from ..agents import PlannerOrchestrator
from ..audit import AuditLogger
from ..models import ChatTurnRequest, IntentPayload, PlannerResult

router = APIRouter(prefix="/design", tags=["design"])


def get_orchestrator(request: Request) -> PlannerOrchestrator:
  """
  Retrieve the PlannerOrchestrator instance stored on the application's state.
  
  Returns:
      PlannerOrchestrator: The orchestrator instance from `request.app.state.planner`.
  """
  return request.app.state.planner


def get_audit(request: Request) -> AuditLogger:
  """
  Retrieve the AuditLogger instance stored on the FastAPI application state.
  
  Returns:
      AuditLogger: The AuditLogger found at request.app.state.audit_logger.
  """
  return request.app.state.audit_logger


@router.post("/interpret-intent", response_model=PlannerResult)
async def interpret_intent(payload: IntentPayload, orchestrator: PlannerOrchestrator = Depends(get_orchestrator), audit: AuditLogger = Depends(get_audit)) -> PlannerResult:
  """
  Convert a natural-language intent into proposed planner deltas and high-level actions without executing external tools.
  
  Returns:
      PlannerResult: Planner output containing proposed deltas, planned tool call specifications, and related planner metadata.
  """
  result = await orchestrator.run(payload, execute_tools=False)
  audit.log(
    event="ai.design.interpret-intent",
    payload={
      "projectId": payload.projectId,
      "message": payload.message,
      "toolCalls": [tc.model_dump() for tc in result.toolCalls],
      "proposedDeltas": [d.model_dump() for d in result.proposedDeltas],
    },
  )
  return result


@router.post("/chat", response_model=PlannerResult)
async def design_chat(payload: ChatTurnRequest, orchestrator: PlannerOrchestrator = Depends(get_orchestrator), audit: AuditLogger = Depends(get_audit)) -> PlannerResult:
  """
  Perform a chat turn with the planner, allowing deterministic tool invocation.
  
  Records an audit event "ai.design.chat" that includes projectId, message, toolCalls, and proposedDeltas.
  
  Returns:
      PlannerResult: Planner decisions, recorded tool calls, and any proposed deltas.
  """
  result = await orchestrator.run_chat(payload)
  audit.log(
    event="ai.design.chat",
    payload={
      "projectId": payload.projectId,
      "message": payload.message,
      "toolCalls": [tc.model_dump() for tc in result.toolCalls],
      "proposedDeltas": [d.model_dump() for d in result.proposedDeltas] if result.proposedDeltas else [],
    },
  )
  return result
