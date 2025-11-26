import 'reflect-metadata';
import { initTelemetry, getLogger } from '@kitchen-cpq/instrumentation-otel';
import { NestFactory } from '@nestjs/core';
import { AiOrchestrationModule } from './module';

const logger = getLogger('main');

async function bootstrap() {
  await initTelemetry({
    serviceName: 'ai-orchestration-service',
    serviceVersion: process.env.SERVICE_VERSION ?? '0.0.1',
  });

  const app = await NestFactory.create(AiOrchestrationModule);

  app.enableShutdownHooks();

  await app.listen(process.env.PORT ?? 3017);
  logger.info(`ai-orchestration-service listening on port ${process.env.PORT ?? 3017}`);
}

bootstrap().catch((err) => {
  logger.error('Failed to bootstrap ai-orchestration-service:', err);
  process.exit(1);
});

