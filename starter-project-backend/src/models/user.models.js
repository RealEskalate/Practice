const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName : {
        type: String,
        required: [true,'firstName is required'],
        trim: true,
    },
    lastName : {
        type: String,
        required: [true,'lastName is required'],
        trim: true
    },
    email : {
        type: String,
        required: [true,'email is required'],
        trim: true
    },
    password : {
        type : String,
        required: [true,'password is required'],
        maxlength: [20, 'password can not exceed 20 characters'],
        minlength: [8, 'password can not be less than 8 characters']
    },
    profilePic : String
})

module.exports = mongoose.model("user", userSchema);