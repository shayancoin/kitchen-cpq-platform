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
 * Orchestrates CPQ, CAD/CAM, and manufacturing activities to produce a manufacturing job for a quote.
 *
 * @param input - Workflow input; must include `quoteId` and `catalog` in addition to `projectId` and `tenantId`
 * @returns An object containing the input `quoteId` and the created manufacturing `jobId` (or `undefined` if no job was produced)
 * @throws Error if `input.quoteId` or `input.catalog` is missing
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