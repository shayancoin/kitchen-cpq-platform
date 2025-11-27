export class InstrumentationLogger {
  constructor(private readonly serviceName: string) {}

  info(message: string, meta?: Record<string, unknown>) {
    // eslint-disable-next-line no-console
    console.log(`[${this.serviceName}] ${message}`, meta ?? {});
  }

  warn(message: string, meta?: Record<string, unknown>) {
    // eslint-disable-next-line no-console
    console.warn(`[${this.serviceName}] ${message}`, meta ?? {});
  }

  error(message: string, meta?: Record<string, unknown>) {
    // eslint-disable-next-line no-console
    console.error(`[${this.serviceName}] ${message}`, meta ?? {});
  }
}

export const logger = new InstrumentationLogger('workflow-orchestration-service');
