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
  addTodo(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('completed') completed: boolean,
  ) {
    return this.todoService.createTodo(title, description, completed);
  }
  @Get('/comp')
  getCompleted() {
    return this.todoService.getCompleted();
  }
  @Get(':id')
  getoneTodo(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }
  @Patch(':id')
  updateTodo(
    @Param('id') todoId: string,
    @Body('title') title: string,
    @Body('description') desc: string,
    @Body('completed') completed: boolean,
  ) {
    return this.todoService.updateTodo(todoId, title, desc, completed);
  }
  @Delete(':id')
  deleteTodo(@Param('id') todoId: string) {
    return this.todoService.deleteTodo(todoId);
  }
}
