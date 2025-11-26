import { Module } from '@nestjs/common';
import { InstrumentationModule } from '@kitchen-cpq/instrumentation-otel';
import { TrpcModule } from './modules/trpc/trpc.module';
import { AuthModule } from './modules/auth/auth.module';
import { TenantsModule } from './modules/tenants/tenants.module';
import { CpqGatewayModule } from './modules/cpq-gateway/cpq-gateway.module';
import { ConfiguratorGatewayModule } from './modules/configurator-gateway/configurator-gateway.module';

@Module({
  imports: [
    InstrumentationModule.forRoot({
      serviceName: 'api-gateway',
      enableTracing: true,
      enableMetrics: true
    }),
    TrpcModule,
    AuthModule,
    TenantsModule,
    CpqGatewayModule,
    ConfiguratorGatewayModule
  ]
})
export class AppModule {}
