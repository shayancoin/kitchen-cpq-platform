import { Module } from '@nestjs/common';
import { InstrumentationModule } from '@kitchen-cpq/instrumentation-otel';

@Module({
  imports: [
    InstrumentationModule.forRoot({
      serviceName: 'analytics-telemetry-service',
      enableTracing: true,
      enableMetrics: true
    })
  ]
})
export class AnalyticsTelemetryModule {}
