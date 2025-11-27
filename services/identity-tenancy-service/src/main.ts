import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { IdentityTenancyModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(IdentityTenancyModule);
  await app.listen(process.env.PORT ?? 3010);
}

bootstrap();
