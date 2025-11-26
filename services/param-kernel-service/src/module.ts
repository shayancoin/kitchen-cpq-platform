import { Module, Injectable } from '@nestjs/common';
import { performance } from 'perf_hooks';

// Proto-shaped TypeScript types (mirroring packages/proto-defs/protos/parametric_kernel.proto)
interface ParamDelta {
  path: string;
  value_json: string;
}

interface ApplyDeltaRequest {
  project_id: string;
  deltas: ParamDelta[];
}

interface ConstraintViolation {
  code: string;
  severity: string;
  message: string;
  affected_cabinet_ids: string[];
  affected_geometry_ids: string[];
}

interface ConstraintSummary {
  has_blocking_errors: boolean;
  violations: ConstraintViolation[];
}

interface ParametricStateSummary {
  state_id: string;
  version: string;
  metadata: Record<string, string>;
}

interface ApplyDeltaResponse {
  state: ParametricStateSummary;
  constraints: ConstraintSummary;
}

interface ValidateDesignRequest {
  project_id: string;
}

interface ValidateDesignResponse {
  constraints: ConstraintSummary;
}

// Placeholder bindings to geometry kernel (replace with real WASM/Rust bridge).
// Importing @kitchen-cpq/geometry-kernel directly would fail until bindings exist,
// so we stub a synchronous call here.
function kernelApplyDelta(_req: ApplyDeltaRequest): {
  state: ParametricStateSummary;
  constraints: ConstraintSummary;
} {
  return {
    state: {
      state_id: `state-${Date.now()}`,
      version: 'v1',
      metadata: {
        projectId: _req.project_id,
        catalogVersionId: 'unknown'
      }
    },
    constraints: { has_blocking_errors: false, violations: [] }
  };
}

// Metrics/tracing placeholders (replace with OpenTelemetry + Prometheus exporters).
function recordHistogram(
  _name: string,
  _labels: Record<string, string>,
  _valueSeconds: number
) {
  // no-op stub
}

async function withSpan<T>(name: string, fn: () => Promise<T>): Promise<T> {
  // Simple wrapper; replace with real tracer.startActiveSpan
  return fn();
}

@Injectable()
class ParametricKernelService {
  async ApplyDelta(req: ApplyDeltaRequest): Promise<ApplyDeltaResponse> {
    const start = performance.now();
    const deserializeStart = start;

    // Deserialize/validate (stubbed)
    const deserializeEnd = performance.now();

    const kernelStart = performance.now();
    const kernelResult = kernelApplyDelta(req);
    const kernelEnd = performance.now();

    const serializeStart = performance.now();
    const response: ApplyDeltaResponse = {
      state: kernelResult.state,
      constraints: kernelResult.constraints
    };
    const serializeEnd = performance.now();

    const totalMs = performance.now() - start;

    // Budget checks (P95 target ≤ 30ms)
    const deserializeMs = deserializeEnd - deserializeStart;
    const kernelMs = kernelEnd - kernelStart;
    const serializeMs = serializeEnd - serializeStart;

    if (deserializeMs > 2 || kernelMs > 20 || serializeMs > 5 || totalMs > 30) {
      // In a real implementation, escalate/log; here we just note via console.
      console.warn('ParamKernel budget breach', {
        deserializeMs,
        kernelMs,
        serializeMs,
        totalMs
      });
    }

    recordHistogram(
      'grpc_server_duration_seconds',
      { service: 'param-kernel', method: 'ApplyDelta' },
      totalMs / 1000
    );

    await withSpan('ParametricKernelService.ApplyDelta', async () => {
      await withSpan('ParametricKernelService.ApplyDelta.kernel', async () => {});
      await withSpan('ParametricKernelService.ApplyDelta.serialize', async () => {});
      return response;
    });

    return response;
  }

  async ValidateDesign(req: ValidateDesignRequest): Promise<ValidateDesignResponse> {
    const start = performance.now();
    // Placeholder validation logic; reuse kernel constraints if needed.
    const constraints: ConstraintSummary = { has_blocking_errors: false, violations: [] };
    recordHistogram(
      'grpc_server_duration_seconds',
      { service: 'param-kernel', method: 'ValidateDesign' },
      (performance.now() - start) / 1000
    );
    await withSpan('ParametricKernelService.ValidateDesign', async () => {});
    return { constraints };
  }
}

@Module({
  providers: [ParametricKernelService],
  exports: [ParametricKernelService]
})
export class ParamKernelModule {}
