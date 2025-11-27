import type {
  CatalogSnapshotRef,
  ManufacturingJob,
  ProjectId,
  QuoteId,
  TenantId,
  ULID
} from '@kitchen-cpq/shared-types';
import { randomUUID } from 'crypto';
import { logger } from '../instrumentation';

export async function createManufacturingJobActivity(input: {
  projectId: ProjectId;
  quoteId: QuoteId;
  tenantId: TenantId;
  catalog: CatalogSnapshotRef;
  bomId?: ULID;
  cncProgramId?: ULID;
}): Promise<ManufacturingJob> {
  const now = new Date().toISOString();
  const job: ManufacturingJob = {
    id: randomUUID() as ULID,
    tenantId: input.tenantId,
    projectId: input.projectId,
    quoteId: input.quoteId,
    catalogVersion: input.catalog,
    status: 'scheduled',
    createdAt: now,
    updatedAt: now,
    bomId: input.bomId,
    cncProgramId: input.cncProgramId
  };

  logger.info('createManufacturingJobActivity', { job });
  return job;
}

export const createManufacturingJobActivityOptions = {
  startToCloseTimeout: '20s',
  retry: {
    initialInterval: '1s',
    maximumAttempts: 3
  }
};
