const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName : {
        type: String,
        require: [true,'firstName is required'],
        trim: true,
    },
    lastName : {
        type: String,
        require: [true,'lastName is required'],
        trim: true
    },
    email : {
        type: String,
        require: [true,'email is required'],
        trim: true
    },
    password : {
        type : String,
        require: [true,'password is required'],
        max: [20, 'password can not exceed 20 characters'],
        min: [8, 'password can not be less than 8 characters']
    },
    profilePic : String
})

module.exports = mongoose.model("User", userSchema);