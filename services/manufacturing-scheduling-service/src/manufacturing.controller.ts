import { Body, Controller, Get, Param, Post, Req, UnauthorizedException } from '@nestjs/common';
import type { Request } from 'express';
import type {
  CatalogSnapshotRef,
  ProjectId,
  QuoteId,
  TenantId,
  ULID
} from '@kitchen-cpq/shared-types';
import { ManufacturingService } from './manufacturing.service';

@Controller('api/manufacturing')
export class ManufacturingController {
  constructor(private readonly service: ManufacturingService) {}

  @Post('jobs')
  createJob(
    @Body()
    body: {
      projectId: ProjectId;
      quoteId: QuoteId;
      tenantId: TenantId;
      catalogSnapshot: CatalogSnapshotRef;
    }
  ) {
    return this.service.createJob({
      projectId: body.projectId,
      quoteId: body.quoteId,
      tenantId: body.tenantId,
      catalogSnapshot: body.catalogSnapshot
    });
  }

  @Post('jobs/:jobId/complete')
  completeJob(@Param('jobId') jobId: ULID, @Body() body: { notes?: string }) {
    return this.service.completeJob(jobId, body.notes);
  }

  @Get('jobs')
  listJobs(@Req() req: Request) {
    const tenantId = (req as any).user?.tenantId as TenantId | undefined;
    if (!tenantId) {
      throw new UnauthorizedException('Tenant context is required');
    }
    return this.service.listJobs(tenantId);
  }
}
