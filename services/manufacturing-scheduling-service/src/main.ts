import { NestFactory } from '@nestjs/core';
import { ManufacturingSchedulingModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(ManufacturingSchedulingModule);
  await app.listen(process.env.PORT ?? 3016);
}

bootstrap();

