import type { ISODateTime, ULID } from './primitives';
import type { ProjectId } from './projects';
import type { TenantId } from './identity';
import type { QuoteId } from './cpq';

export type WorkflowType = 'KitchenOrderWorkflow' | 'ManufacturingJobWorkflow' | 'QuoteWorkflow';

export type WorkflowStatus = 'pending' | 'running' | 'completed' | 'failed' | 'canceled';

export interface WorkflowEvent {
  workflowId: string;
  runId?: string;
  workflowType: WorkflowType;
  status: WorkflowStatus;
  timestamp: ISODateTime;
  projectId?: ProjectId;
  tenantId?: TenantId;
  quoteId?: QuoteId;
  attempt?: number;
  errorCode?: string;
  errorMessage?: string;
  schemaVersion?: string;
}

export interface WorkflowAck {
  workflowId: string;
  receivedAt: ISODateTime;
  requestId?: ULID;
}
