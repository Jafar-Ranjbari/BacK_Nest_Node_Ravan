import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

export interface Todo {
  id: number;
  title: string;
  description?: string;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.idCounter++,
      ...createTodoDto,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo | undefined {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) return undefined;
    this.todos[todoIndex] = { ...this.todos[todoIndex], ...updateTodoDto };
    return this.todos[todoIndex];
  }

  delete(id: number): boolean {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) return false;
    this.todos.splice(todoIndex, 1);
    return true;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }
}