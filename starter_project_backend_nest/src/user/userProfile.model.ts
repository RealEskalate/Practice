import mongoose from 'mongoose';
import { Schema } from '@nestjs/mongoose';

export default interface UserProfileI extends mongoose.Document {
  userId: string;
  bio: string;
  imageUrls: string[];
}

export const UserProfileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
    default: '',
  },
  imageUrls: {
    type: String,
    unique: true,
    required: true,
  },
});
