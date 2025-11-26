import { NestFactory } from '@nestjs/core';
import { ConfiguratorSessionModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(ConfiguratorSessionModule);
  await app.listen(process.env.PORT ?? 3013);
}

bootstrap();

