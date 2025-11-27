import { Controller, Get, Param, Query } from '@nestjs/common';
import type { ParametricState, QuoteSummary, TenantId } from '@kitchen-cpq/shared-types';
import { CpqGatewayService } from './cpq-gateway.service';

@Controller('bff/cpq')
export class CpqGatewayController {
  constructor(private readonly cpqGatewayService: CpqGatewayService) {}

  @Get('quotes/:projectId')
  getQuote(
    @Param('projectId') projectId: string,
    @Query('tenantId') tenantId?: string
  ): QuoteSummary {
    return this.cpqGatewayService.buildQuote(projectId, (tenantId ?? 'tenant-demo') as TenantId);
  }

  @Get('state/:projectId')
  getState(
    @Param('projectId') projectId: string,
    @Query('tenantId') tenantId?: string
  ): ParametricState {
    return this.cpqGatewayService.buildParametricState(projectId, (tenantId ?? 'tenant-demo') as TenantId);
  }
}
