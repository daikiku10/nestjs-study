import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET',
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
