<<<<<<< HEAD:starter-project-backend/src/middlewares/login.middleware.js
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.models')
const secret = 'pass@besp'


const authenticate = async(req, res, next) => {
    const {email, password} = req.body
    try{
        const user = await User.findOne({email})
        if (user){
            const auth = await bcrypt.compare(password,user.password)
            if (auth){
                const token = jwt.sign({_id: user._id}, `${secret}`)
                console.log("logged in",token)
                res.cookie('jwt',token)
            }
            else{
                console.log('pass or email is incorrect')
            }
        }
        throw Error('email not registered')
        
    }catch(err){
        res.status(400).json(err)
=======
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

const authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("email", email);
  try {
    const user = await User.findOne({ email });
    console.log("getUser", user);
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        console.log("logged in", user);
        const token = await jwt.sign({ _id: newUser._id }, "jwt token");
        res.cookie("jwt", token);
        res.status(200).json({ user: user._id });
      } else {
        console.log("pass or email is incorrect");
      }
>>>>>>> main:starter-project-backend/src/middleware/logInUser.js
    }
    throw Error("email not registered");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = authenticate;
