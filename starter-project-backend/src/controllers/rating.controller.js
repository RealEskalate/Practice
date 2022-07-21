const { updateOne } = require("../models/rating");
const Rating = require("../models/rating");
const { crudControllers } = require("../utils/crud");

/**
 * Model agnostic crud controller
 */
module.exports = {
  ...crudControllers(Rating),
  removeOne(req, res) {},
  async updateOne(req, res) {
    try {
      const updatedDoc = await Rating.findOneAndUpdate(
        {
          user: req.user._id,
          _id: req.params.id,
        },
        req.body,
        { new: true }
      )
        .lean()
        .exec();

      if (!updatedDoc) {
        return res.status(404).end();
      }

      res.status(200).json({ data: updatedDoc });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  },
  async removeOne(req, res) {
    try {
      const removed = await model.findOneAndRemove({
        _id: req.params.id,
        user: req.user._id,
      });

      if (!removed) {
        return res.status(404).end();
      }

      return res.status(200).json({ data: removed });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  },
};
