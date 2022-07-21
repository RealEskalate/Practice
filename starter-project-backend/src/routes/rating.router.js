const { Router } = require("express");
const ratingController = require("../controllers/rating.controller");
// console.log(ratingController);
const router = Router();

// /api/rating
router
  .route("/")
  .get(ratingController.getMany)
  .post(ratingController.createOne);

// /api/rating/:id
router
  .route("/:id")
  .get(ratingController.getOne)
  .put(ratingController.updateOne)
  .delete(ratingController.removeOne);

module.exports = router;