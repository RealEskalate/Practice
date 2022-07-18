const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectID, 
        ref: 'User',
    },
    articleID: {
        type: mongoose.Types.ObjectID,
        ref: 'Article',
    },
    content: {
        type: String,
        trim: true,
        required: [true, 'Content is required!'],
    },
})

module.exports = mongoose.model("Article", articleSchema);