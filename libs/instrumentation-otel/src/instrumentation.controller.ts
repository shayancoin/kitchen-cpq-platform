import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { InstrumentationService } from './instrumentation.service';

@Controller()
export class InstrumentationController {
  constructor(private readonly instrumentation: InstrumentationService) {}

  @Get('/metrics')
  getMetrics(@Res() res: Response) {
    const body = this.instrumentation.buildMetrics();
    res.setHeader('Content-Type', 'text/plain; version=0.0.4');
    res.send(body);
  }
}

@Controller()
export class HealthController {
  @Get('/health')
  getHealth() {
    return { status: 'ok' };
  }
}
