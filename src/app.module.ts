import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI!, {
      // serverSelectionTimeoutMS: 5000,
      // retryAttempts: 1, // Reduce retry attempts for faster failure feedback
    }),
    TodoModule,
    UsersModule,
    QuizModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}