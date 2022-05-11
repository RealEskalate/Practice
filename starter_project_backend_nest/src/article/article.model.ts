import mongoose from 'mongoose'

export default interface Article_Interface extends mongoose.Document{

  author:{
    firstName:String,
    lastName:String,
    bio:String
  },//author object

  title:String,
  content:String,

}

export const ArticleSchema:mongoose.Schema<Article_Interface> = new mongoose.Schema({
  
  author:{
    firstName:{
      type:String,
      required: true
    },
    lastName:{
      type:String,
      required: true
    },
    bio:{
      type:String,
      required: true
    },
  },//author object

  title:{
    type:String,
    required: true
  },

  content:{
    type:String,
    required: true
  },
})

