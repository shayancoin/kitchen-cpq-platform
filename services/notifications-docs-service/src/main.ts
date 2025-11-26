import { NestFactory } from '@nestjs/core';
import { NotificationsDocsModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationsDocsModule);
  await app.listen(process.env.PORT ?? 3023);
}

bootstrap();

