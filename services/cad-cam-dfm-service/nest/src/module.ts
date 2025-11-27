import { Module } from '@nestjs/common';
import { CadCamController } from './cadcam.controller';
import { CadCamService } from './cadcam.service';

@Module({
  controllers: [CadCamController],
  providers: [CadCamService]
})
export class CadCamDfmModule {}
