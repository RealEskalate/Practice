import mongoose, { Schema, Document } from 'mongoose';

export default interface IComment extends Document {
  user: Schema.Types.ObjectId;
  articleId: Schema.Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
