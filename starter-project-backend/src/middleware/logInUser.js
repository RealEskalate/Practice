const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

const authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        const token = await jwt.sign({ _id: newUser._id }, "jwt token");
        res.cookie("jwt", token);
        res.status(200).json({ user: user._id });
      } else {
        console.log("pass or email is incorrect");
      }
    }
    throw Error("email not registered");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = authenticate;
