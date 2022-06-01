import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoSchema } from './todos.model';
import { CloudinaryModule } from './../cloudinary/cloudinary.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
    CloudinaryModule,
  ],

  controllers: [TodoController],
  providers: [TodoService],
})
export class TodosModule {}
