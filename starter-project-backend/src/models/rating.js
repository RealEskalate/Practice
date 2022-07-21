const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  stars: {
    type: Number,
    required: true,
    min: [1, "rating too low"],
    max: [5, "rating too high"],
  },
  article: {
    type: mongoose.Types.ObjectId,
    ref: "Article",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
