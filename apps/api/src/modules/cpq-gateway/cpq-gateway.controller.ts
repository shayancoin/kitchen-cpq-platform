import { Controller, Get, Param, Query, UnauthorizedException } from '@nestjs/common';
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
    if (!tenantId) {
      throw new UnauthorizedException('tenantId is required');
    }

    return this.cpqGatewayService.buildQuote(projectId, tenantId as TenantId);
  }

  @Get('state/:projectId')
  getState(
    @Param('projectId') projectId: string,
    @Query('tenantId') tenantId?: string
  ): ParametricState {
    if (!tenantId) {
      throw new UnauthorizedException('tenantId is required');
    }

    return this.cpqGatewayService.buildParametricState(projectId, tenantId as TenantId);
  }
}
