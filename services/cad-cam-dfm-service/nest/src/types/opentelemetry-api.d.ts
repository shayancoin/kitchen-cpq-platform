declare module '@opentelemetry/api' {
  export const trace: {
    getTracer: (_name?: string) => { startSpan: (name: string, opts?: any) => { end: () => void } };
  };
}
