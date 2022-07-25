<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const authenticate = require('../middlewares/login.middleware')
const register = require('../middlewares/register.middleware')
const signOut = require('../middlewares/logout.middleware')

router.post('/register', register);
router.post('/login', authenticate);
router.get('/logout',signOut)
=======
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
>>>>>>> main

router.route("/:id").get(userController.getOne);
router.route("/").get(userController.getMany);
router.route("/").post(userController.createOne);
router.route("/:id").put(userController.updateOne);
router.route("/:id").delete(userController.removeOne);

module.exports = router;
