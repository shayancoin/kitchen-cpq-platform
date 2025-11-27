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

/**
 * Create a new ManufacturingJob record initialized with status "scheduled" and current timestamps.
 *
 * @param input - Input parameters for the new manufacturing job
 * @param input.projectId - Project identifier the job is associated with
 * @param input.quoteId - Quote identifier the job is associated with
 * @param input.tenantId - Tenant identifier owning the job
 * @param input.catalog - Catalog snapshot reference used as the job's catalogVersion
 * @param input.bomId - Optional BOM ULID to attach to the job
 * @param input.cncProgramId - Optional CNC program ULID to attach to the job
 * @returns The constructed ManufacturingJob including `id`, `tenantId`, `projectId`, `quoteId`, `catalogVersion`, `status` set to `"scheduled"`, `createdAt`, `updatedAt`, and any provided `bomId` and `cncProgramId`
 */
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