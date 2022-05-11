import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Todo from './todos.model';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todomodel: Model<Todo>) {}

  async createTodo(title: string, description: string, completed: boolean) {
    const newTodo = await this.todomodel.create({
      title,
      description,
      completed,
    });

    return newTodo;
  }
  async getTodos() {
    const todos = await this.todomodel.find();
    return todos;
  }
  async getCompleted() {
    const completedTodo = await this.todomodel.find({ completed: true }).exec();
    return completedTodo;
  }
  async getUncompleted() {
    const completedTodo = await this.todomodel
      .find({ completed: false })
      .exec();
    return completedTodo;
  }
  async getTodo(id: string) {
    const todo = await this.todomodel.findById(id);
    return todo;
  }
  async updateTodo(
    id: string,
    title: string,
    desc: string,
    completed: boolean,
  ) {
    try {
      const todo = await this.todomodel.findById(id);
      if (title) {
        todo.title = title;
      }
      if (desc) {
        todo.description = desc;
      }
      if (completed) {
        todo.completed = completed;
      }
      todo.save();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
  private async findTodo(id: string) {
    let todo;
    try {
      todo = await this.todomodel.findById(id);
    } catch (error) {
      throw new NotFoundException(`todo with ${id} not found`);
    }
    if (!todo) {
      throw new NotFoundException(`todo with ${id} not found`);
    }
    return todo;
  }
  async deleteTodo(id: string) {
    const todo = await this.findTodo(id);
    if (todo) {
      this.todomodel.deleteOne({ _id: id });
    } else {
      throw new NotFoundException(`todo with ${id} not found`);
    }
  }
}
