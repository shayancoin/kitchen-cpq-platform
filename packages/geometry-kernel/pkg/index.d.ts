import type { ConstraintSummary, ParamDelta, ParametricState, ProjectId } from '@kitchen-cpq/shared-types';

export declare function applyDelta(
  state: ParametricState,
  delta: ParamDelta[]
): Promise<{ state: ParametricState; constraints: ConstraintSummary }>;

export declare function validateDesign(projectId: ProjectId): Promise<ConstraintSummary>;

export declare function getStoredState(projectId: ProjectId): ParametricState | undefined;
export declare function setStoredState(projectId: ProjectId, state: ParametricState): void;
export declare function createDefaultState(projectId: ProjectId): ParametricState;
