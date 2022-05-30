import mongoose from 'mongoose';

export default interface Article_Interface extends mongoose.Document {
  authorUserId: String;
  title: String;
  content: String;
  categories: [];
  rating: { 1: Number; 2: Number; 3: Number; 4: Number; 5: Number };
}

export const ArticleSchema: mongoose.Schema<Article_Interface> =
  new mongoose.Schema({
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
    categories: {
      type: [],
      default: [],
    },
  });
