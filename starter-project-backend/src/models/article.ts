
//mongoose.Schema is used as a type and as a function
// there is nested schema discreption with author
// I don't understand the <> thing
// why are we extening to .Document

import mongoose from 'mongoose'

export interface Article_Interface extends mongoose.Document{

  id:String,

  author:{
    firstName:String,
    lastName:String,
    bio:String
  },//author object

  title:String,
  content:String,

}

const ArticleSchema:mongoose.Schema<Article_Interface> = new mongoose.Schema({
  
  id:{
    type:String,
    required: true
  },

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
let Article = mongoose.model<Article_Interface>("ArticleColl", ArticleSchema)
export default Article;


