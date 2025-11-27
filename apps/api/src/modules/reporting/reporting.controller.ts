import { Controller, Get, Param } from '@nestjs/common';
import type { ProjectId } from '@kitchen-cpq/shared-types';
import { ReportingService } from './reporting.service';

@Controller('api/status')
export class ReportingController {
  constructor(private readonly reporting: ReportingService) {}

  @Get('orders/:projectId')
  orderTimeline(@Param('projectId') projectId: ProjectId) {
    return this.reporting.getOrderTimeline(projectId);
  }

  @Get('manufacturing')
  manufacturingJobs() {
    return this.reporting.getManufacturingJobs();
  }
}
