import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo | null> {
    return this.todoModel.findById(id).exec();
  }

  async delete(id: string): Promise<Todo | null> {
    return this.todoModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, todo: Todo): Promise<Todo | null> {
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true }).exec();
  }
}