const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  stars: {
    type: Number,
    required: true,
    min: [1, "rating too low"],
    max: [5, "rating too high"],
  },
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
