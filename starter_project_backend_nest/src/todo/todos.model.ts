import mongoose from 'mongoose';
import { Interface } from 'readline';
import { Schema } from '@nestjs/mongoose';
import { text } from 'stream/consumers';

export default interface Todo extends mongoose.Document {
  title: string;
  description: string;
  completed: boolean;
}

export const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});