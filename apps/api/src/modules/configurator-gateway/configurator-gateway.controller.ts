import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import type {
  ConstraintSummary,
  LayoutVariant,
  ParamDelta,
  ParametricState,
  TenantId
} from '@kitchen-cpq/shared-types';
import { ConfiguratorGatewayService } from './configurator-gateway.service';

type MutateRequest = {
  projectId: string;
  tenantId?: string;
  deltas: ParamDelta[];
};

@Controller('bff/configurator')
export class ConfiguratorGatewayController {
  constructor(private readonly configuratorGatewayService: ConfiguratorGatewayService) {}

  @Get('state/:projectId')
  getState(
    @Param('projectId') projectId: string,
    @Query('tenantId') tenantId?: string
  ): ParametricState {
    return this.configuratorGatewayService.buildState(
      projectId,
      (tenantId ?? 'tenant-demo') as TenantId
    );
  }

  @Post('mutate')
  mutate(@Body() body: MutateRequest): { state: ParametricState; constraintSummary: ConstraintSummary } {
    const base = this.configuratorGatewayService.buildState(
      body.projectId,
      (body.tenantId ?? 'tenant-demo') as TenantId
    );
    const state = this.configuratorGatewayService.applyDeltas(base, body.deltas);
    return { state, constraintSummary: state.constraints };
  }

  @Get('layouts/:projectId')
  layouts(
    @Param('projectId') projectId: string,
    @Query('tenantId') tenantId?: string
  ): { variants: LayoutVariant[] } {
    const state = this.configuratorGatewayService.buildState(
      projectId,
      (tenantId ?? 'tenant-demo') as TenantId
    );
    return { variants: this.configuratorGatewayService.layoutVariants(state) };
  }

  @Get('constraints/:projectId')
  constraints(): ConstraintSummary {
    return this.configuratorGatewayService.constraintSummary();
  }
}
