import {
  Body,
  Controller,
  Module,
  Post
} from '@nestjs/common';
import type {
  ConstraintSummary,
  ParamDelta,
  ParametricState
} from '@kitchen-cpq/shared-types';
import {
  applyDelta,
  createDefaultState,
  getStoredState,
  setStoredState,
  validateDesign
} from '@kitchen-cpq/geometry-kernel';
import { InstrumentationModule } from '@kitchen-cpq/instrumentation-otel';

export interface ParamDeltaProto {
  path: string;
  value_json: string;
}

export interface ApplyDeltaRequest {
  project_id: string;
  deltas: ParamDeltaProto[];
}

export interface ParametricStateJson {
  json: string;
}

export interface ApplyDeltaResponse {
  state: ParametricStateJson;
  constraints: ConstraintSummary;
}

export interface ValidateDesignRequest {
  project_id: string;
}

export interface ValidateDesignResponse {
  constraints: ConstraintSummary;
}

const nowIso = () => new Date().toISOString();

export class ParametricKernelService {
  private ensureBaseState(projectId: string): ParametricState {
    return getStoredState(projectId as any) ?? createDefaultState(projectId as any);
  }

  async applyDelta(req: ApplyDeltaRequest): Promise<ApplyDeltaResponse> {
    const current = this.ensureBaseState(req.project_id);
    const deltas: ParamDelta[] = req.deltas.map((d) => ({
      path: d.path as any,
      value: JSON.parse(d.value_json)
    }));

    const result = await applyDelta(current, deltas);
    setStoredState(req.project_id as any, result.state);

    return {
      state: { json: JSON.stringify(result.state) },
      constraints: result.constraints
    };
  }

  async validateDesign(req: ValidateDesignRequest): Promise<ValidateDesignResponse> {
    this.ensureBaseState(req.project_id);
    const constraints = await validateDesign(req.project_id as any);
    return { constraints };
  }
}

@Controller('kernel')
export class ParametricKernelHttpController {
  constructor(private readonly kernel: ParametricKernelService) {}

  @Post('apply-delta')
  async apply(@Body() body: ApplyDeltaRequest): Promise<ApplyDeltaResponse> {
    return this.kernel.applyDelta(body);
  }

  @Post('validate')
  async validate(@Body() body: ValidateDesignRequest): Promise<ValidateDesignResponse> {
    return this.kernel.validateDesign(body);
  }
}

@Module({
  imports: [
    InstrumentationModule.forRoot({
      serviceName: 'param-kernel-service',
      enableTracing: true,
      enableMetrics: true
    })
  ],
  controllers: [ParametricKernelHttpController],
  providers: [ParametricKernelService],
  exports: [ParametricKernelService]
})
export class ParamKernelModule {}
