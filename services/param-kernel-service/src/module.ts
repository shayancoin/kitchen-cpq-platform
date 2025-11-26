import { Module, Injectable } from '@nestjs/common';
import { trace as otelTrace, context } from '@opentelemetry/api';
import { performance } from 'perf_hooks';
import {
  ApplyDeltaRequest,
  ApplyDeltaResponse,
  ParametricStateSummary,
  ValidateDesignRequest,
  ValidateDesignResponse,
  ConstraintSummary
} from '@kitchen-cpq/shared-types';
import { InstrumentationModule, logger } from '@kitchen-cpq/instrumentation-otel';

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
    constraints: { hasBlockingErrors: false, violations: [] }
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

function getTraceId(): string {
  const span = otelTrace.getSpan(context.active());
  return span?.spanContext().traceId ?? 'unknown';
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
      logger.warn('ParamKernel budget breach', {
        deserializeMs,
        kernelMs,
        serializeMs,
        totalMs,
        trace_id: getTraceId()
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

  async ValidateDesign(_req: ValidateDesignRequest): Promise<ValidateDesignResponse> {
    const start = performance.now();
    // Placeholder validation logic; reuse kernel constraints if needed.
    const constraints: ConstraintSummary = { hasBlockingErrors: false, violations: [] };
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
  imports: [
    InstrumentationModule.forRoot({
      serviceName: 'param-kernel-service',
      enableTracing: true,
      enableMetrics: true
    })
  ],
  providers: [ParametricKernelService],
  exports: [ParametricKernelService]
})
export class ParamKernelModule {}
