import './instrumentation';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './infra/filters/all-exceptions.filter';
import { InstrumentationLogger } from '@kitchen-cpq/instrumentation-otel';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
    credentials: true,
  });

  app.useGlobalFilters(new AllExceptionsFilter(new InstrumentationLogger('AllExceptionsFilter')));

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
