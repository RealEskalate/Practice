import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from './db';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from '../todo/todos.model';
import { TodoService } from '../todo/todo.service';
import { TodoController } from './../todo/todo.controller';
import { UserSchema } from '../user/user.model';
import UserI from './../user/user.model';
import { Model } from 'mongoose';
import { UserService } from '../user/user.service';

describe('TodoTesting', () => {
  let service: TodoService;
  let module: TestingModule;
  let usersercice: UserService;
  let userid;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          {
            name: 'Todo',
            schema: TodoSchema,
          },
          {
            name: 'User',
            schema: UserSchema,
          },
        ]),
      ],
      providers: [TodoService, UserService],
    }).compile();
    service = module.get<TodoService>(TodoService);
    usersercice = module.get<UserService>(UserService);
  });
  beforeEach(async () => {
    const todo = await service.createTodo(
      'todo title 1',
      'todo description 1',
      false,
    );
    const user = await usersercice.createUser(
      'username',
      'firstname',
      'lastname',
      'password',
    );
    userid = user._id;
  });
  describe('check todo exist', () => {
    it('check if user exist', async () => {
      console.log(userid);
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
