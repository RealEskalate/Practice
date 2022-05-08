import { registerAs } from '@nestjs/config';

export const secret = registerAs('SECRET_KEY', () => ({
  SECRET_KEY: process.env.SECRET_KEY,
}));

export default registerAs('database', () => ({
  uri: process.env.MONGO_URI,
}));
