import {
  MiddlewareConsumer,
  Module,
  NestModule
} from '@nestjs/common';
import type { Request } from 'express';
import { APP_INTERCEPTOR } from '@nestjs/core';
import {
  InstrumentationModule,
  InstrumentationService,
  InstrumentationLogger
} from '@kitchen-cpq/instrumentation-otel';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
class RequestSpanInterceptor implements NestInterceptor {
  constructor(
    private readonly instrumentation: InstrumentationService,
    private readonly logger: InstrumentationLogger
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const httpCtx = context.switchToHttp();
    const req = httpCtx.getRequest<Request & { originalUrl?: string }>();
    const start = process.hrtime.bigint();
    const method = (req as any)?.method || 'UNKNOWN';
    const path = ((req as any)?.originalUrl || (req as any)?.url || '').split('?')[0];

    this.logger.info('request.start', { method, path });

    return next.handle().pipe(
      tap(() => {
        const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000;
        this.logger.info('request.complete', { method, path, durationMs });
      }),
      catchError((err) => {
        const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000;
        this.logger.error('request.error', {
          method,
          path,
          durationMs,
          error: (err as Error)?.message
        });
        throw err;
      })
    );
  }
}

@Module({
  imports: [
    InstrumentationModule.forRoot({
      serviceName: 'notifications-docs-service',
      enableTracing: true,
      enableMetrics: true
    })
  ],
  providers: [
    InstrumentationLogger,
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestSpanInterceptor
    }
  ]
})
export class NotificationsDocsModule implements NestModule {
  constructor(private readonly instrumentation: InstrumentationService) {}

  configure(consumer: MiddlewareConsumer) {
    const metricsMiddleware = this.instrumentation.createRequestMiddleware();
    consumer.apply(metricsMiddleware.use).forRoutes('*');
  }
}
