import type { ISODateTime } from './primitives';
import type { LayoutGoals, ParamDelta } from './configuration';
import type { ProjectId } from './projects';

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

