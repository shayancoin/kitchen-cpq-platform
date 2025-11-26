import { context, trace } from '@opentelemetry/api';
import { NextFunction, Request, Response } from 'express';

export function httpInstrumentationMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    const span = trace.getSpan(context.active());
    const spanContext = span?.spanContext();

    if (spanContext) {
      res.setHeader('x-trace-id', spanContext.traceId);
      res.setHeader('x-span-id', spanContext.spanId);
    }

    next();
  };
}
