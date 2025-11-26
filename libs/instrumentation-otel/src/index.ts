export * from './instrumentation.module';
export * from './instrumentation.service';
export * from './instrumentation.types';
export * from './logger';

// Singleton logger for non-DI contexts (e.g., Temporal activities).
import { InstrumentationLogger } from './logger';
export const logger = new InstrumentationLogger();
