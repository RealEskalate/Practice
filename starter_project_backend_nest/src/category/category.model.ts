import { string } from 'joi';
import mongoose from 'mongoose';

export default interface CategoryI extends mongoose.Document {
  categoryName: string;
}

export const CategorySchema: mongoose.Schema<CategoryI> = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
  },
});
