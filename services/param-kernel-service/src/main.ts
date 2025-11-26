import { NestFactory } from '@nestjs/core';
import { ParamKernelModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(ParamKernelModule);
  await app.listen(process.env.PORT ?? 3012);
}

bootstrap();

