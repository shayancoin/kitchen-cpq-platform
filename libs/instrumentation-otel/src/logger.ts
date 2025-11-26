import { Logger } from '@nestjs/common';

type LogMeta = Record<string, unknown>;

export class InstrumentationLogger {
  private readonly logger: Logger;

  constructor(context = 'Instrumentation') {
    this.logger = new Logger(context);
  }

  info(message: string, meta: LogMeta = {}) {
    this.logger.log({ message, ...meta });
  }

  warn(message: string, meta: LogMeta = {}) {
    this.logger.warn({ message, ...meta });
  }

  error(message: string, meta: LogMeta = {}) {
    this.logger.error({ message, ...meta });
  }
}
