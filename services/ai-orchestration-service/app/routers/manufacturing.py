from __future__ import annotations

from fastapi import APIRouter, Depends, Request

from ..audit import AuditLogger
from ..models import ManufacturingAnalystRequest, ManufacturingAnalystResponse, ToolCall, ToolName

router = APIRouter(prefix="/manufacturing", tags=["manufacturing"])


def get_audit(request: Request) -> AuditLogger:
  """
  Retrieve the application's AuditLogger instance from the incoming request's application state.
  
  Parameters:
      request (Request): The incoming FastAPI request used to access app state.
  
  Returns:
      AuditLogger: The AuditLogger stored on request.app.state.audit_logger.
  """
  return request.app.state.audit_logger


@router.post("/analyst", response_model=ManufacturingAnalystResponse)
async def manufacturing_analyst(
  payload: ManufacturingAnalystRequest,
  audit: AuditLogger = Depends(get_audit),
) -> ManufacturingAnalystResponse:
  """
  Produce deterministic manufacturing recommendations and schedule CAD/CAM tool calls.
  
  Emits an audit event "ai.manufacturing.analyst" with the payload fields `projectId`, `tenantId`, `message`, `workflowId`, and a serialized `toolCalls` list.
  
  Parameters:
      payload (ManufacturingAnalystRequest): Request containing projectId, tenantId, message, and workflowId used for recommendations and audit logging.
  
  Returns:
      ManufacturingAnalystResponse: Response containing a human-readable `reply`, a list of `toolCalls` (each a `ToolCall` with initial status "pending"), and a list of string `recommendations`.
  """
  recommendations = [
    "Validate current configuration against catalog snapshot before releasing manufacturing job.",
    "Run nesting and panel utilization check via CAD/CAM service.",
  ]
  tool_calls = [
    ToolCall(
      id="workflow-sanity",
      tool_name=ToolName.cad_generate_macro,
      arguments={"note": "Manufacturing analyst placeholder; delegates to CAD/CAM and workflows."},
      status="pending",
    )
  ]
  audit.log(
    event="ai.manufacturing.analyst",
    payload={
      "projectId": payload.projectId,
      "tenantId": payload.tenantId,
      "message": payload.message,
      "workflowId": payload.workflowId,
      "toolCalls": [tc.model_dump() for tc in tool_calls],
    },
  )
  return ManufacturingAnalystResponse(
    reply="Manufacturing analyst prepared a deterministic recommendation; see tools list.",
    toolCalls=tool_calls,
    recommendations=recommendations,
  )