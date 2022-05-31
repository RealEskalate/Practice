import mongoose from 'mongoose';
import { Schema } from '@nestjs/mongoose';

export default interface UserProfileI extends mongoose.Document {
  userId: object;
  bio: string;
  imageUrl: string;
}

export const UserProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'UserSchema',
  },
  bio: {
    type: String,
    required: false,
    default: '',
  },
  imageUrl: {
    type: String,
    required: true,
  },
});
