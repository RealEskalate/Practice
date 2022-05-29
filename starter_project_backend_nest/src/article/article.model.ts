import mongoose from 'mongoose';

export default interface Article_Interface extends mongoose.Document {
  authorUserId: string;
  title: string;
  content: string;
  rating: { 1: number; 2: number; 3: number; 4: number; 5: number };
  imageUrls: string[];
}

const ArticleSchema: mongoose.Schema<Article_Interface> = new mongoose.Schema({
  authorUserId: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
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
});

ArticleSchema.index({ title: 'text', content: 'text' });
export { ArticleSchema };
