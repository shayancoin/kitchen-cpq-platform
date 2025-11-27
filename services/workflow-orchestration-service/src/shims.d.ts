declare module 'express';

declare module '@opentelemetry/api' {
  export const trace: any;
  export const SpanStatusCode: any;
}
