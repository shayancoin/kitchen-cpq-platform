import { NestFactory } from '@nestjs/core';
import { EcommerceServiceModule } from './module';
import {
  InstrumentationService
} from '@kitchen-cpq/instrumentation-otel';

async function bootstrap() {
  // Start telemetry SDK before app creation (placeholder for OTLP exporters)
  const app = await NestFactory.create(EcommerceServiceModule);

  const instrumentation = app.get(InstrumentationService);
  app.use(instrumentation.createRequestMiddleware().use);

  // Health and /metrics routes are provided by InstrumentationModule controllers.
  const port = process.env.PORT ?? 3022;
  await app.listen(port);
}

bootstrap();
