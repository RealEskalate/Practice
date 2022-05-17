import mongoose, { Schema, Document } from 'mongoose';

export default interface IComment extends Document {
  userId: Schema.Types.ObjectId;
  articleId: Schema.Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export const CommentSchema: Schema<IComment> = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    articleId: {
      type: mongoose.Types.ObjectId,
      ref: 'Article',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);
