import { DynamicModule, Module } from '@nestjs/common';
import { InstrumentationController, HealthController } from './instrumentation.controller';
import { InstrumentationService } from './instrumentation.service';
import { InstrumentationLogger } from './logger';
import { INSTRUMENTATION_OPTIONS } from './tokens';
import type { InstrumentationOptions } from './instrumentation.types';

@Module({})
export class InstrumentationModule {
  static forRoot(options: InstrumentationOptions): DynamicModule {
    return {
      module: InstrumentationModule,
      controllers: [InstrumentationController, HealthController],
      providers: [
        InstrumentationService,
        InstrumentationLogger,
        {
          provide: INSTRUMENTATION_OPTIONS,
          useValue: options
        }
      ],
      exports: [InstrumentationService, InstrumentationLogger]
    };
  }
}
