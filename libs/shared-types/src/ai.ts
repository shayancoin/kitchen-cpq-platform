import type { ISODateTime } from './primitives';
import type { ConstraintSummary, LayoutGoals, ParamDelta, ParametricState } from './configuration';
import type { ProjectId, Role } from './projects';

export type CopilotRole = 'user' | 'assistant' | 'system' | 'tool';

export interface CopilotMessage {
  id: string;
  role: CopilotRole;
  content: string;
  createdAt: ISODateTime;
}

export interface ToolCall {
  id: string;
  toolName: string;
  argumentsJson: string;
}

export interface CopilotTurn {
  messages: CopilotMessage[];
  toolCalls?: ToolCall[];
}

export interface IntentParameters {
  projectId: ProjectId;
  goals?: LayoutGoals;
  proposedDeltas?: ParamDelta[];
}

export type AgentToolName =
  | 'paramEngine.applyDelta'
  | 'optimizer.solveLayout'
  | 'cadService.generateCadMacro'
  | 'pricingService.simulateChange';

export type AgentToolStatus = 'pending' | 'running' | 'succeeded' | 'failed';

export interface AgentToolCall {
  id: string;
  toolName: AgentToolName;
  arguments: unknown;
  status: AgentToolStatus;
  result?: unknown;
  error?: string;
}

export interface CopilotPlanResponse {
  reply: string;
  proposedDeltas?: ParamDelta[];
  toolCalls: AgentToolCall[];
  validatedState?: ParametricState;
  constraintSummary?: ConstraintSummary;
  warnings?: string[];
}

export interface CopilotChatRequest {
  projectId: ProjectId;
  message: string;
  role: Role;
  history?: CopilotMessage[];
  goals?: LayoutGoals;
  parametricState?: ParametricState;
}
