import mongoose from 'mongoose';
import { Schema } from '@nestjs/mongoose';

export default interface UserI extends mongoose.Document {
  fullName: string;
  email: string;
  password: string;
  profileId: string;
}

export const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserProfile',
    required: false,
  },
});
