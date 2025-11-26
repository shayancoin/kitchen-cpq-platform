import { NestFactory } from '@nestjs/core';
import { ErpServiceModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(ErpServiceModule);
  await app.listen(process.env.PORT ?? 3021);
}

bootstrap();

