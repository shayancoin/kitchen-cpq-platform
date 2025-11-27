from __future__ import annotations

from enum import Enum
from typing import Any, List, Optional

from pydantic import BaseModel, Field, HttpUrl


class CopilotRole(str, Enum):
  user = "user"
  assistant = "assistant"
  system = "system"
  tool = "tool"


class CopilotMessage(BaseModel):
  role: CopilotRole
  content: str
  created_at: Optional[str] = None
  id: Optional[str] = None


class ToolName(str, Enum):
  param_engine_apply_delta = "paramEngine.applyDelta"
  optimizer_solve_layout = "optimizer.solveLayout"
  cad_generate_macro = "cadService.generateCadMacro"
  pricing_simulate_change = "pricingService.simulateChange"


class ToolCall(BaseModel):
  id: str
  tool_name: ToolName
  arguments: dict[str, Any]
  status: str = "pending"
  result: Optional[dict[str, Any]] = None
  error: Optional[str] = None


class ParamDelta(BaseModel):
  path: str
  value: Any


class LayoutGoals(BaseModel):
  storageWeight: Optional[float] = Field(default=None, ge=0, le=1)
  budgetWeight: Optional[float] = Field(default=None, ge=0, le=1)
  opennessWeight: Optional[float] = Field(default=None, ge=0, le=1)
  familyFriendlyWeight: Optional[float] = Field(default=None, ge=0, le=1)
  prefersIsland: Optional[bool] = None


class ParametricState(BaseModel):
  projectId: str
  tenantId: Optional[str] = None
  catalogVersionId: Optional[str] = None
  room: Optional[dict[str, Any]] = None
  cabinets: Optional[list[dict[str, Any]]] = None
  constraints: Optional[dict[str, Any]] = None
  updatedAt: Optional[str] = None


class ConstraintSummary(BaseModel):
  hasBlockingErrors: bool = False
  violations: list[dict[str, Any]] = Field(default_factory=list)


class IntentPayload(BaseModel):
  projectId: str
  message: str
  role: CopilotRole = CopilotRole.user
  goals: Optional[LayoutGoals] = None
  parametricState: Optional[ParametricState] = None
  attachedImageUrl: Optional[HttpUrl] = None
  dry_run: bool = False


class PlannerResult(BaseModel):
  reply: str
  proposedDeltas: list[ParamDelta] = Field(default_factory=list)
  toolCalls: list[ToolCall] = Field(default_factory=list)
  validatedState: Optional[ParametricState] = None
  constraintSummary: Optional[ConstraintSummary] = None
  warnings: list[str] = Field(default_factory=list)


class ChatTurnRequest(IntentPayload):
  history: list[CopilotMessage] = Field(default_factory=list)


class ManufacturingAnalystRequest(BaseModel):
  projectId: str
  message: str
  workflowId: Optional[str] = None
  constraints: Optional[dict[str, Any]] = None


class ManufacturingAnalystResponse(BaseModel):
  reply: str
  toolCalls: list[ToolCall] = Field(default_factory=list)
  recommendations: list[str] = Field(default_factory=list)
