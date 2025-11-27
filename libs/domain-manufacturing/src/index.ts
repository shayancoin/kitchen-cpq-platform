import { randomUUID } from 'crypto';
import type {
  Bom,
  CatalogSnapshotRef,
  ISODateTime,
  ManufacturingJob,
  ManufacturingJobStatus,
  ProjectId,
  QuoteId,
  TenantId,
  ULID
} from '@kitchen-cpq/shared-types';

export interface ManufacturingInputs {
  projectId: ProjectId;
  quoteId: QuoteId;
  tenantId: TenantId;
  catalogVersion: CatalogSnapshotRef;
  bom?: Bom;
}

export interface ManufacturingScheduler {
  createJob(input: ManufacturingInputs): ManufacturingJob;
  completeJob(jobId: ULID, notes?: string): ManufacturingJob | undefined;
}

export class InMemoryManufacturingScheduler implements ManufacturingScheduler {
  private readonly jobs = new Map<ULID, ManufacturingJob>();

  createJob(input: ManufacturingInputs): ManufacturingJob {
    const now = new Date().toISOString() as ISODateTime;
    const job: ManufacturingJob = {
      id: randomUUID() as ULID,
      tenantId: input.tenantId,
      projectId: input.projectId,
      quoteId: input.quoteId,
      catalogVersion: input.catalogVersion,
      status: 'scheduled',
      createdAt: now,
      updatedAt: now,
      bomId: input.bom?.id
    };
    this.jobs.set(job.id, job);
    return job;
  }

  completeJob(jobId: ULID, notes?: string): ManufacturingJob | undefined {
    const job = this.jobs.get(jobId);
    if (!job) return undefined;
    const updated: ManufacturingJob = {
      ...job,
      status: 'completed',
      updatedAt: new Date().toISOString() as ISODateTime,
      notes
    };
    this.jobs.set(jobId, updated);
    return updated;
  }

  updateStatus(jobId: ULID, status: ManufacturingJobStatus, notes?: string) {
    const job = this.jobs.get(jobId);
    if (!job) return;
    const updated: ManufacturingJob = {
      ...job,
      status,
      updatedAt: new Date().toISOString() as ISODateTime,
      notes: notes ?? job.notes
    };
    this.jobs.set(jobId, updated);
  }

  list(): ManufacturingJob[] {
    return [...this.jobs.values()];
  }
}
