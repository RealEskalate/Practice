import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from './db';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user/user.model';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('UserTesing', () => {
  let service: UserService;
  let controller: UserController;
  let module: TestingModule;
  let user1;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          {
            name: 'User',
            schema: UserSchema,
          },
        ]),
      ],
      providers: [UserService],
      controllers: [UserController],
    }).compile();
    service = module.get<UserService>(UserService);
    controller = module.get<UserController>(UserController);
  });

  beforeAll(async () => {
    user1 = await service.createUser(
      'user',
      'firstName1',
      'lastName2',
      'password',
    );
  });

  afterAll(async () => {
    user1 = await service.deleteUser(user1._id);
  });

  it('Controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('User API', () => {
    it('It should get all uers', async () => {
      const user = await controller.getAllUser();
      expect(user).toBeDefined();
    });

    it('It should get user details', async () => {
      let response = await controller.getUserById(user1._id);
      expect(response._id).toEqual(user1._id);
    });

    it('It should not get user details', async () => {
      let response = await controller.getUserById(null);
      expect(response).toBeNull();
    });

    it('It should create user', async () => {
      let response: any = await controller.createUser(
        'username2',
        'firstName2',
        'lastName2',
        'password',
      );
      expect(response).toBeDefined();
      expect(response.username).toEqual('username2');
    });

    it('It should not create user', async () => {
      let response = await controller.createUser(
        'username3',
        'firstName3',
        'lastName3',
        'password',
      );

      try {
        await controller.createUser(
          'username3',
          'firstName3',
          'lastName3',
          'password',
        );
      } catch (e) {
        expect(e).toBeInstanceOf(ConflictException);
      }
    });

    it('It should update user', async () => {
      let response: any = await controller.createUser(
        'updateUser',
        'updateFirst',
        'updateLast',
        'password',
      );
      
      let response2: any = await controller.updateUser(
        response._id,
        'usernamechanged',
        'firstName3',
        'lastName3',
        'password',
      );

      expect(response2).toBeDefined();
      expect(response2.username).toEqual('usernamechanged');

    });

    it('It should not update user', async () => {
      try {
        let response2: any = await controller.updateUser(
          'invaliduserID',
          'usernamechanged',
          'firstName3',
          'lastName3',
          'password',
        );
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });

    it('It should delete user', async () => {
      let response: any = await controller.createUser(
        'updateUser',
        'updateFirst',
        'updateLast',
        'password',
      );

      const user = response;
      const response1 = await controller.deleteUser(user._id);

      const exist = await controller.getUserById(user._id);
      expect(exist).toBeNull();
    });

    it('It should not delete user', async () => {
      try {
        const response1 = await controller.deleteUser(null);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  afterAll(async () => {
    if (module) {
      await module.close();
      await closeInMongodConnection();
    }
  });
});
