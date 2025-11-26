import { Logger } from '@nestjs/common';

type LogMeta = Record<string, unknown>;

export class InstrumentationLogger {
  private readonly logger = new Logger('Instrumentation');

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
