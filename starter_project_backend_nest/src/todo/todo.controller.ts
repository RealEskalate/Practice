import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get('/all')
  getAllTodos() {
    return this.todoService.getTodos();
  }

  @Post()
  async addTodo(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('completed') completed: boolean,
  ) {
    return await this.todoService.createTodo(title, description, completed);
  }
  @Get('/comp')
  async getCompleted() {
    return await this.todoService.getCompleted();
  }
  @Get(':id')
  getoneTodo(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }
  @Patch(':id')
  async updateTodo(
    @Param('id') todoId: string,
    @Body('title') title: string,
    @Body('description') desc: string,
    @Body('completed') completed: boolean,
  ) {
    return await this.todoService.updateTodo(todoId, title, desc, completed);
  }
  @Delete(':id')
  async deleteTodo(@Param('id') todoId: string) {
    return await this.todoService.deleteTodo(todoId);
  }
}