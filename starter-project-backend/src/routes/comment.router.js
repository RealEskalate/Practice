const { Router } = require("express");
const commentController = require("../controllers/comment.controller");
const { isAuthorized } = require("../middleware/commentAuthorization");
const router = Router();

// For the routes with: /api/comments
router
  .route("/")
  .get(commentController.getMany)
  .post(commentController.createOne);

// For the routes with: /api/comments/:id
router
  .route("/:id")
  .get(commentController.getOne)
  .put(isAuthorized, commentController.updateOne)
  .delete(isAuthorized, commentController.removeOne);

module.exports = router;