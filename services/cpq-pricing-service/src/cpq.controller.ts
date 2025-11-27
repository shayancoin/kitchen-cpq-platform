import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import type { CatalogSnapshotRef, ProjectId, QuoteId, TenantId } from '@kitchen-cpq/shared-types';
import { CpqService } from './cpq.service';

@Controller('api/cpq')
export class CpqController {
  constructor(private readonly service: CpqService) {}

  @Get('quote/:projectId')
  getQuote(@Param('projectId') projectId: ProjectId) {
    return this.service.getQuoteForProject(projectId);
  }

  @Post('quote')
  createQuote(
    @Body()
    body: {
      projectId: ProjectId;
      tenantId: TenantId;
      catalogSnapshot: CatalogSnapshotRef;
      items?: { sku: string; description: string; quantity: number }[];
    }
  ) {
    return this.service.createQuote({
      projectId: body.projectId,
      tenantId: body.tenantId,
      catalogSnapshot: body.catalogSnapshot,
      currency: 'USD',
      items: body.items ?? []
    });
  }

  @Post('recompute-quote')
  recomputeQuote(
    @Body()
    body: {
      projectId: ProjectId;
      tenantId: TenantId;
      quoteId?: QuoteId;
      catalogSnapshot: CatalogSnapshotRef;
      allowCatalogOverride?: boolean;
    }
  ) {
    return this.service.repriceQuote({
      projectId: body.projectId,
      tenantId: body.tenantId,
      catalogSnapshot: body.catalogSnapshot,
      quoteId: body.quoteId,
      allowCatalogOverride: body.allowCatalogOverride
    });
  }

  @Post('confirm')
  confirmQuote(@Body() body: { quoteId: QuoteId }) {
    return this.service.confirmQuote(body.quoteId);
  }
}
