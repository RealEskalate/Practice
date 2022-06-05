import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from './db';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user/user.model';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { CloudinaryModule } from './../cloudinary/cloudinary.module';
import { UserProfileSchema } from '../user/userProfile.model';

class MockingCloudinaryModule extends CloudinaryModule {
  uploadImage(Image) {
    return 'random/url' + Math.random();
  }
}

describe('testing User', () => {
  let service: UserService;
  let controller: UserController;
  let module: TestingModule;
  let mockingUser;
  let req_mock = { user: { userId: '' } };

  const userOne = {
    email: 'user@email',
    fullName: 'fullName',
    password: '123',
  };
  const userTwo = {
    email: 'usertwo@email',
    fullName: 'fullName',
    password: '123',
  };

  const userThree = {
    email: 'userthree@email',
    fullName: 'fullName',
    password: '123',
  };
  const updatedUser = {
    email: 'updateUser',
    fullName: 'updateFullName',
    password: '123',
  };

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
        MongooseModule.forFeature([
          { name: 'UserProfile', schema: UserProfileSchema },
        ]),
        MockingCloudinaryModule,
      ],
      providers: [UserService],
      controllers: [UserController],
    }).compile();
    service = module.get<UserService>(UserService);
    controller = module.get<UserController>(UserController);
  });

  beforeEach(async () => {
    mockingUser = await service.createUser(userOne);
  });

  afterEach(async () => {
    const users = await service.getAllUser();
    for (let user of users) {
      await service.deleteUser(user._id);
    }
  });

  describe('checking Module', () => {
    it('Controller should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('service should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('GET User', () => {
    it('It should get all uers', async () => {
      const allUsers = await controller.getAllUser();
      expect(allUsers).toBeDefined();
    });

    it('It should get user details', async () => {
      const allUsers = await controller.getAllUser();
      let res = await controller.getUserById(mockingUser._id.toString());
      expect(res._id).toEqual(mockingUser._id);
    });

    it('It should not get user details', async () => {
      try {
        let res = await controller.getUserById(null);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('POST User', () => {
    it('It should create user', async () => {
      let response: any = await controller.createUser(userTwo);
      expect(response).toBeDefined();
      expect(response.email).toEqual(userTwo.email);
    });

    it('It should not create user', async () => {
      let response = await controller.createUser(userThree);

      try {
        await controller.createUser(userThree);
      } catch (e) {
        expect(e).toBeInstanceOf(ConflictException);
      }
    });
  });

  describe('PATCH User', () => {
    it('It should update user', async () => {
      let response: any = await controller.createUser(updatedUser);

      let response2: any = await service.updateUser({
        userId: response._id,
        email: 'updatedEmail',
        fullName: 'firstName3',
        password: 'password',
      });

      expect(response2).toBeDefined();
      expect(response2.email).toEqual('updatedEmail');
    });

    it('It should not update user', async () => {
      try {
        let response2: any = await service.updateUser({
          userId: 'invaliduserID',
          email: 'updatedEmail',
          fullName: 'firstName3',
          password: 'password',
        });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('DELETE User', () => {
    it('It should delete user', async () => {
      let user = await controller.createUser(userTwo);

      req_mock.user.userId = user._id;
      const res = await controller.deleteUser(req_mock, user._id);
      expect(res).toBeDefined();

      try {
        await controller.getUserById(user._id);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });

    it('It should not delete user', async () => {
      try {
        req_mock.user.userId = null;
        await controller.deleteUser(req_mock, null);
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
