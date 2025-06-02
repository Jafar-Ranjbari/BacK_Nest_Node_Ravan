import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // تنظیمات Swagger
  const config = new DocumentBuilder()
    .setTitle('Todo App API')
    .setDescription('API documentation for Todo App')
    .setVersion('1.0')
    .addBearerAuth() // اگر احراز هویت داری
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();