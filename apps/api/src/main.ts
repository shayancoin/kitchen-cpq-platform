import './instrumentation';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './infra/filters/all-exceptions.filter';
import { InstrumentationLogger } from '@kitchen-cpq/instrumentation-otel';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    'http://localhost:4200',
    'http://127.0.0.1:4200',
    process.env.FRONTEND_URL ?? 'http://localhost:4200',
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (origin && allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS blocked for origin: ${origin ?? 'undefined'}`));
    },
    credentials: true,
  });

  app.useGlobalFilters(new AllExceptionsFilter(new InstrumentationLogger('AllExceptionsFilter')));

  await app.listen(process.env.PORT ?? 3001);
}

void bootstrap().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start API', err);
  process.exitCode = 1;
});
