import { NestFactory } from '@nestjs/core';
import { CpqPricingModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(CpqPricingModule);
  await app.listen(process.env.PORT ?? 3014);
}

bootstrap();

