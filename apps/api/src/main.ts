import './instrumentation';
import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './infra/filters/all-exceptions.filter';
import { httpInstrumentationMiddleware } from './infra/telemetry/http-instrumentation.middleware';
import { metricsMiddleware } from './infra/telemetry/metrics';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(httpInstrumentationMiddleware());

  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
    credentials: true,
  });

  app.useGlobalFilters(new AllExceptionsFilter(new Logger('AllExceptionsFilter')));

  const server = app.getHttpAdapter().getInstance();
  server.get('/health', (_req: Request, res: Response) => res.status(200).json({ status: 'ok' }));
  server.get('/metrics', metricsMiddleware);

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
