const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.models');

const register = async(req, res, next) => {

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(req.body.password,salt)

    try{
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
        })
    
        await newUser.save()
                .then((user) => {
                    console.log(user)
                })
        
        const token = jwt.sign({_id: newUser._id},'jwt token')
        res.cookie('jwt',token)
        res.status(201).json({user: newUser._id})
    }catch(err){
        res.status(401).json({err})
    }

 }

 module.exports = register