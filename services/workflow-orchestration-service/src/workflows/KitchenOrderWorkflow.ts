import type {
  CatalogSnapshotRef,
  ProjectId,
  QuoteId,
  TenantId
} from '@kitchen-cpq/shared-types';
import { proxyActivities } from '../temporal';

const cpqActivities = proxyActivities<{
  recomputeQuoteActivity(params: { projectId: ProjectId; tenantId: TenantId }): Promise<void>;
}>({
  startToCloseTimeout: '30s',
  scheduleToCloseTimeout: '2m'
});

const cadCamActivities = proxyActivities<{
  generateCadCamOutputsActivity(params: {
    projectId: ProjectId;
    quoteId: QuoteId;
    tenantId: TenantId;
    catalog: CatalogSnapshotRef;
  }): Promise<{ bomId: string; cncProgramId: string }>;
}>({
  startToCloseTimeout: '30s',
  scheduleToCloseTimeout: '2m'
});

const manufacturingActivities = proxyActivities<{
  createManufacturingJobActivity(params: {
    projectId: ProjectId;
    quoteId: QuoteId;
    tenantId: TenantId;
    catalog: CatalogSnapshotRef;
    bomId?: string;
    cncProgramId?: string;
  }): Promise<{ jobId: string }>;
}>({
  startToCloseTimeout: '10s',
  scheduleToCloseTimeout: '30s'
});

export interface KitchenOrderWorkflowInput {
  projectId: ProjectId;
  tenantId: TenantId;
  quoteId?: QuoteId;
  catalog?: CatalogSnapshotRef;
}

/**
 * Lightweight stub of the KitchenOrderWorkflow.
 * Temporal clients can start this workflow to orchestrate CPQ -> CAD/CAM -> Manufacturing.
 */
export async function KitchenOrderWorkflow(
  input: KitchenOrderWorkflowInput
): Promise<{ quoteId?: QuoteId; jobId?: string }> {
  if (!input.quoteId || !input.catalog) {
    throw new Error('KitchenOrderWorkflow requires quoteId and catalog');
  }

  await cpqActivities.recomputeQuoteActivity({
    projectId: input.projectId,
    tenantId: input.tenantId
  });

  const cadOutputs = await cadCamActivities.generateCadCamOutputsActivity({
    projectId: input.projectId,
    quoteId: input.quoteId,
    tenantId: input.tenantId,
    catalog: input.catalog
  });

  const job = await manufacturingActivities.createManufacturingJobActivity({
    projectId: input.projectId,
    quoteId: input.quoteId,
    tenantId: input.tenantId,
    catalog: input.catalog,
    bomId: cadOutputs.bomId,
    cncProgramId: cadOutputs.cncProgramId
  });

  return { quoteId: input.quoteId, jobId: job?.jobId ?? undefined };
}
