import { userStub } from '../stubs/user.stub';

export const UserService = jest.fn().mockReturnValue({
  getUserId: jest.fn().mockReturnValue({
    getUserById: jest.fn().mockReturnValue(userStub()),
  }),
  getAllUser: jest.fn().mockReturnValue(userStub()),
  createUser: jest.fn().mockReturnValue(userStub()),
  updateUser: jest.fn().mockReturnValue(userStub()),
});
