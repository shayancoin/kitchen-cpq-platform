import { NestFactory } from '@nestjs/core';
import { CrmServiceModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(CrmServiceModule);
  await app.listen(process.env.PORT ?? 3020);
}

bootstrap();

