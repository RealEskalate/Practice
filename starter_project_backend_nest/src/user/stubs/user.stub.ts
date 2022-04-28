import UserI, { UserSchema } from '../user.model';

export const userStub = () => {
  return {
    _id: 'ididididid',
    username: 'username',
    firstName: 'someone',
    lastName: 'lastName',
    password: 'password',
  };
};
