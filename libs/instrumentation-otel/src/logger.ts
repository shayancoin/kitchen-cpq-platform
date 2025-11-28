import { Logger } from '@nestjs/common';

type LogMeta = Record<string, unknown> | string | undefined;

const normalizeMeta = (meta?: LogMeta): Record<string, unknown> => {
  if (typeof meta === 'string') {
    return { stack: meta };
  }
  return meta ?? {};
};

export class InstrumentationLogger {
  private readonly logger: Logger;

  constructor(context = 'Instrumentation') {
    this.logger = new Logger(context);
  }

  info(message: string, meta?: LogMeta) {
    this.logger.log({ message, ...normalizeMeta(meta) });
  }

  warn(message: string, meta?: LogMeta) {
    this.logger.warn({ message, ...normalizeMeta(meta) });
  }

  error(message: string, meta?: LogMeta) {
    this.logger.error({ message, ...normalizeMeta(meta) });
  }
}
