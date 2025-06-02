import { Controller, Post, Put, Delete, Get, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(Number(id), updateTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.delete(Number(id));
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.findOne(Number(id));
  }

  @Get()
  getAllTodos() {
    return this.todoService.findAll();
  }
}