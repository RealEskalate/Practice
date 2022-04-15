import {Response, Request, NextFunction} from "express"
import Article  from "../models/article"

async function getAllArticle(req:Request, res:Response, next:NextFunction) 
{
  try{
    let articles = await Article.find({}) 
    res.status(200).json({data: articles})
  }catch(e)
  {
    res.status(500).send("server error")
  }

}

async function getArticleById( req:Request,res:Response, next:NextFunction) {


  if(!req.params.id) {
    res.status(400).send("bad request")
    return;
  }


  try{

    let article = await Article.findOne({id: req.params.id}) 

    if(!article){ 
      res.status(404).json("article not found")
      return;
    }
    
    res.status(200).json({data: article})

  }catch(e) {
    res.status(500).send("data error")
  }


}

async function addArticle(req:Request, res:Response,  next:NextFunction) 
{
  //TODO: what if the same object exists already
  let {id, author, title, content} = req.body

  if(!id || !author || !title || !content)
  {
    // bad request
    res.status(400).send("bad request")
    return;
  }

  if(!author.firstName || !author.lastName)
  {
    //bad request
    res.status(400).send("bad request author")
    return;
  }

  if(!author.bio){author.bio = ""}

  let newArticle =  new Article({id, author, title, content})


  try{
    await newArticle.save()
    res.status(200).send("saved successfully ")
  }catch(e)
  {
    res.status(500).send("data Base error")
  }


}



async function updateArticleById( req:Request, res:Response, next:NextFunction)
{

  let article = await Article.findOne({id:req.params.id})
  if(!article)
  {
    // article not found 
    res.status(404).send("article not found"); 
    return
  }

  
  let {id, author, title, content} = req.body

  if(id){ article.id = id}

  else if(author && 
    author.firstName && 
    author.lastName && 
    author.bio)
  {
      article.author = author
  }

  else if(title) {article.title = title}
  else if(content){article.content = content;}
  else {
    res.status(400).send("bad request")
    return;
  }
 

  try{

    await article.save()
    res.status(200).send("article updated")

  }catch(e)
  {
    res.status(500).send("database error")
  }

}
async function deleteArticleById( req:Request, res:Response, next:NextFunction)
{

  try {
    await Article.deleteOne({id:req.params.id}) 
    res.status(200).send("article deleted")

  }catch(e) {
    res.status(500).send("databse error")
  }

}

export default{
 getAllArticle,
 getArticleById,
 addArticle,
 updateArticleById,
 deleteArticleById
}
