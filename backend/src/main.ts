import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // ✅ 이거 추가
  await app.listen(process.env.PORT ?? 3000);
  console.log('MONGO_URI:', process.env.MONGO_URI);
}
bootstrap();
