import UserI, { UserSchema } from '../user.model';

export const userStub = () => {
  return {
    _id: 'ididididid',
    email: 'email',
    fullName: 'someone',
    password: 'password',
  };
};
