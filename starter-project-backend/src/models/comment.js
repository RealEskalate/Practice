const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  article_id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    min: [3, "comment should at least be a word"],
    max: [200, "comment should not be more than a paragraph"],
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;