import type { ProjectId, QuoteId, TenantId } from '@kitchen-cpq/shared-types';
import { proxyActivities } from '../temporal';

const activities = proxyActivities<{
  recomputeQuoteActivity(params: { projectId: ProjectId; tenantId: TenantId }): Promise<void>;
}>({
  startToCloseTimeout: '30s',
  scheduleToCloseTimeout: '2m',
  retryPolicy: {
    initialInterval: '1s',
    backoffCoefficient: 2.0,
    maximumInterval: '15s',
    maximumAttempts: 5,
    nonRetryableErrorTypes: [
      'ValidationError',
      'PermissionDeniedError',
      'DomainConflictError'
    ]
  }
});

export interface QuoteWorkflowInput {
  projectId: ProjectId;
  tenantId: TenantId;
}

export async function QuoteWorkflow(
  input: QuoteWorkflowInput
): Promise<{ quoteId?: QuoteId }> {
  await activities.recomputeQuoteActivity({
    projectId: input.projectId,
    tenantId: input.tenantId
  });
  return { quoteId: undefined };
}
