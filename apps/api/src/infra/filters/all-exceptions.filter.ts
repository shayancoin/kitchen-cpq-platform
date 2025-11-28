import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { context, trace } from '@opentelemetry/api';
import { Request, Response } from 'express';
import { InstrumentationLogger } from '@kitchen-cpq/instrumentation-otel';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: InstrumentationLogger) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | string[] = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      if (typeof res === 'string' || Array.isArray(res)) {
        message = res;
      } else if (res && typeof res === 'object' && 'message' in res) {
        const responseMessage = (res as Record<string, unknown>).message;
        if (typeof responseMessage === 'string' || Array.isArray(responseMessage)) {
          message = responseMessage;
        }
      }
    }

    const span = trace.getSpan(context.active());
    const traceId = span?.spanContext().traceId;

    this.logger.error(
      `HTTP ${status} ${request.method} ${request.url} traceId=${traceId ?? 'unknown'}`,
      exception instanceof Error ? exception.stack : undefined,
    );

    response.status(status).json({
      statusCode: status,
      message,
      traceId,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
