import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/todo-app'), // آدرس دیتابیس خود را وارد کنید
    TodoModule, UserModule, AuthModule,
  ],
  controllers: [AuthController],
})
export class AppModule {}