import { NestFactory } from '@nestjs/core';
import { CatalogRulesModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(CatalogRulesModule);
  await app.listen(process.env.PORT ?? 3011);
}

bootstrap();

