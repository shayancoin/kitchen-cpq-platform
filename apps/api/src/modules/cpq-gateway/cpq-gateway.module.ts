import { Module } from '@nestjs/common';
import { CpqGatewayService } from './cpq-gateway.service';
import { CpqGatewayController } from './cpq-gateway.controller';

@Module({
  providers: [CpqGatewayService],
  controllers: [CpqGatewayController],
  exports: [CpqGatewayService]
})
export class CpqGatewayModule {}
