import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import User from './user.model';
import { userStub } from './stubs/user.stub';

jest.mock('./user.service.ts');

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;
  let user: any;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = moduleRef.get<UserController>(UserController);
    userService = moduleRef.get<UserService>(UserService);
    jest.clearAllMocks();
  });

  beforeEach(async () => {
    user = await userController.getUserById(userStub()._id);
  });

  it('it should get all users', async () => {
    expect(userService.getUserById).toBeCalledWith(userStub()._id);
  });

  it('it should get user', async () => {
    // expect(userService())
  });

  it('it should update user', async () => {});
});
