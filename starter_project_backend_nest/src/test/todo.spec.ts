import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from './db';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from '../todo/todos.model';
import { TodoService } from '../todo/todo.service';
import { TodoController } from './../todo/todo.controller';

describe('TodoTesting', () => {
  let service: TodoService;
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          {
            name: 'Todo',
            schema: TodoSchema,
          },
        ]),
      ],
      providers: [TodoService],
    }).compile();
    service = module.get<TodoService>(TodoService);
  });
  beforeEach(async () => {
    const todo = await service.createTodo(
      'todo title 1',
      'todo description 1',
      false,
    );
  });
  describe('check todo exist', () => {
    it('check if user exist', async () => {
      const todo = await service.getTodos();
      expect(todo).toBeDefined();
    });
  });

  afterAll(async () => {
    if (module) {
      await module.close();
      await closeInMongodConnection();
    }
  });
});
