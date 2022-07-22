const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.route("/:id").get(userController.getOne);
router.route("/").get(userController.getMany);
router.route("/").post(userController.createOne);
router.route("/:id").put(userController.updateOne);
router.route("/:id").delete(userController.removeOne);

module.exports = router;
