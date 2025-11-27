import { Module } from '@nestjs/common';
import { ConfiguratorGatewayService } from './configurator-gateway.service';
import { ConfiguratorGatewayController } from './configurator-gateway.controller';

@Module({
  providers: [ConfiguratorGatewayService],
  controllers: [ConfiguratorGatewayController],
  exports: [ConfiguratorGatewayService]
})
export class ConfiguratorGatewayModule {}
