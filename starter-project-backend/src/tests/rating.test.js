const { Rating } = require("../models/rating");
const mongoose = require("mongoose");

describe("Rating model", () => {
  describe("schema", () => {
    test("stars", () => {
      const stars = Rating.schema.obj.stars;
      expect(stars).toEqual({
        type: Number,
        required: true,
        min: [1, "rating lower than allowed"],
        max: [5, "rating higher than allowed"],
      });
    });
  });
});
