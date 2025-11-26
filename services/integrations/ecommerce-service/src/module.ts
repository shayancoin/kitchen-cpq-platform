import { Module } from '@nestjs/common';
import { InstrumentationModule } from '@kitchen-cpq/instrumentation-otel';

@Module({
  imports: [
    InstrumentationModule.forRoot({
      serviceName: 'integrations-ecommerce-service',
      enableMetrics: true,
      enableTracing: true
    })
  ]
})
export class EcommerceServiceModule {}
