import mongoose from 'mongoose';

export default interface Article_Interface extends mongoose.Document {
  authorUserId: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
  content: string;
  categories: [];
  rating: { 1: number; 2: number; 3: number; 4: number; 5: number };
  imageUrls: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ArticleSchema: mongoose.Schema<Article_Interface> = new mongoose.Schema(
  {
    authorUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    title: {
      type: String,
      required: true,
    },
    categories: {
      type: [],
      default: [],
    },
    content: {
      type: String,
      required: true,
    },
    imageUrls: [
      {
        type: String,
        required: false,
      },
    ],

    rating: {
      1: {
        type: Number,
        default: 0,
        required: false,
      },
      2: {
        type: Number,
        default: 0,
        required: false,
      },
      3: {
        type: Number,
        default: 0,
        required: false,
      },
      4: {
        type: Number,
        default: 0,
        required: false,
      },
      5: {
        type: Number,
        default: 0,
        required: false,
      },
    },

    description: {
      type: String,
      required: true,
    },
  },

  { timestamps: true },
);

ArticleSchema.index({ title: 'text', description: 'text' });
export { ArticleSchema };
