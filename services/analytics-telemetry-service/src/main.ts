import { NestFactory } from '@nestjs/core';
import { AnalyticsTelemetryModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(AnalyticsTelemetryModule);
  await app.listen(process.env.PORT ?? 3024);
}

bootstrap();

