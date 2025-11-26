import { NestFactory } from '@nestjs/core';
import { CadCamDfmModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(CadCamDfmModule);
  await app.listen(process.env.PORT ?? 3018);
}

bootstrap();

