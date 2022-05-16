import mongoose from 'mongoose';

export default interface Article_Interface extends mongoose.Document {
  authorUserId: String;
  title: String;
  content: String;
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
  });
