import { NestFactory } from '@nestjs/core';
import { OrdersPaymentsModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersPaymentsModule);
  await app.listen(process.env.PORT ?? 3015);
}

bootstrap();

