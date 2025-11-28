import { Module } from '@nestjs/common';
import { TrpcModule } from './modules/trpc/trpc.module';
import { AuthModule } from './modules/auth/auth.module';
import { TenantsModule } from './modules/tenants/tenants.module';
import { CpqGatewayModule } from './modules/cpq-gateway/cpq-gateway.module';
import { ConfiguratorGatewayModule } from './modules/configurator-gateway/configurator-gateway.module';
import { ReportingModule } from './modules/reporting/reporting.module';

@Module({
  imports: [
    TrpcModule,
    AuthModule,
    TenantsModule,
    CpqGatewayModule,
    ConfiguratorGatewayModule,
    ReportingModule
  ]
})
export class AppModule {}
