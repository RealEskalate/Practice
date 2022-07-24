const router = require("express").Router();
const cloudinary = require("./cloudinary");
const upload = require("./multer");
const User = require("../models/user.models");


router.delete("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    user.cloudinary_id && await cloudinary.uploader.destroy(user.cloudinary_id);
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: user.password,
      profilePic: '',
      cloudinary_id: ''
    };
    user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    user.cloudinary_id && await cloudinary.uploader.destroy(user.cloudinary_id);
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: user.password,
      profilePic: result.secure_url || user.profilePic,
      cloudinary: result.public_id || user.cloudinary_id,
    };
    user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(user);
    req.user_img = user.avatar;
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;