from __future__ import annotations

from fastapi import APIRouter, Depends, Request

from ..agents import PlannerOrchestrator
from ..audit import AuditLogger
from ..models import ChatTurnRequest, IntentPayload, PlannerResult

router = APIRouter(prefix="/design", tags=["design"])


def get_orchestrator(request: Request) -> PlannerOrchestrator:
  return request.app.state.planner


def get_audit(request: Request) -> AuditLogger:
  return request.app.state.audit_logger


@router.post("/interpret-intent", response_model=PlannerResult)
async def interpret_intent(payload: IntentPayload, orchestrator: PlannerOrchestrator = Depends(get_orchestrator), audit: AuditLogger = Depends(get_audit)) -> PlannerResult:
  """Translate NL to structured deltas and high-level actions without executing unsafe side effects."""
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
  """Full chat loop that can call deterministic tools."""
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
