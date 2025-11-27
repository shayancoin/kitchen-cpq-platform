import { Body, Controller, Get, Param, Post, Query, UnauthorizedException } from '@nestjs/common';
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
    if (!tenantId) {
      throw new UnauthorizedException('tenantId is required');
    }

    return this.configuratorGatewayService.buildState(
      projectId,
      tenantId as TenantId
    );
  }

  @Post('mutate')
  mutate(@Body() body: MutateRequest): { state: ParametricState; constraintSummary: ConstraintSummary } {
    if (!body.tenantId) {
      throw new UnauthorizedException('tenantId is required');
    }

    const base = this.configuratorGatewayService.buildState(
      body.projectId,
      body.tenantId as TenantId
    );
    const state = this.configuratorGatewayService.applyDeltas(base, body.deltas);
    return { state, constraintSummary: state.constraints };
  }

  @Get('layouts/:projectId')
  layouts(
    @Param('projectId') projectId: string,
    @Query('tenantId') tenantId?: string
  ): { variants: LayoutVariant[] } {
    if (!tenantId) {
      throw new UnauthorizedException('tenantId is required');
    }

    const state = this.configuratorGatewayService.buildState(
      projectId,
      tenantId as TenantId
    );
    return { variants: this.configuratorGatewayService.layoutVariants(state) };
  }

  @Get('constraints/:projectId')
  constraints(
    @Param('projectId') projectId: string,
    @Query('tenantId') tenantId?: string
  ): ConstraintSummary {
    if (!tenantId) {
      throw new UnauthorizedException('tenantId is required');
    }

    const state = this.configuratorGatewayService.buildState(
      projectId,
      tenantId as TenantId
    );
    return this.configuratorGatewayService.constraintSummary(state);
  }
}
