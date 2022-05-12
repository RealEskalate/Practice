import mongoose from 'mongoose';
import { Schema } from '@nestjs/mongoose';

export default interface UserI extends mongoose.Document {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let mockUser = {
  authorUserId: '324231234',
};

let sampleArticle = {
  authorUserId: mockUser.authorUserId,
  title: 'titile of an article',
  content: 'content of an article',
};
