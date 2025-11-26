import type { ConstraintSummary } from './constraints';

export interface ParamDelta {
  path: string;
  value_json: string;
}

export interface ApplyDeltaRequest {
  project_id: string;
  deltas: ParamDelta[];
}

export interface ParametricStateSummary {
  state_id: string;
  version: string;
  metadata: Record<string, string>;
}

export interface ApplyDeltaResponse {
  state: ParametricStateSummary;
  constraints: ConstraintSummary;
}

export interface ValidateDesignRequest {
  project_id: string;
}

export interface ValidateDesignResponse {
  constraints: ConstraintSummary;
}
