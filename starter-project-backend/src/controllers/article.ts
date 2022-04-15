import {Response, Request, NextFunction} from "express"
import Article  from "../models/article"

export async function getAllArticle(req:Request, res:Response, next:NextFunction) {

  let articles = await Article.find({}) 
  res.status(200).json({data: articles})

}

export async function getArticleById( req:Request,res:Response, next:NextFunction) {
  
  if(!req.params.id) res.status(400).send("bad request")

  let article = await Article.findOne({id: req.params.id}) 

  if(!article) res.status(404).json("article not found");

  res.status(200).json({data: article})
}

export async function addArticle(req:Request, res:Response,  next:NextFunction) 
{

  let {id, author, title, content} = req.body

  if(!id || !author || !title || !content)
  {
    // bad request
    res.status(400).send("bad request")
  }

  if(!author.firstName || !author.lastName)
  {
    //bad request
    res.status(400).send("bad request author")
  }

  if(!author.bio){author.bio = ""}

  let newArticle =  new Article({id, author, title, content})
  await newArticle.save()
  res.send("saved successfully ")
}



export async function updateArticleById( req:Request, res:Response, next:NextFunction)
{

  let article = await Article.findOne({id:req.params.id})
  if(!article){res.status(404).send("article not found"); return};

  
  let {id, author, title, content} = req.body

  if(id){ article.id = id};
  if(author) {article.author = author};
  if(title) {article.title = title};
  if(content){article.content = content;};

  await article.save()

  res.send("article updated")

}
export async function deleteArticleById( req:Request, res:Response, next:NextFunction)
{


  await Article.deleteOne({id:req.params.id}) 
  res.send("article deleted")

}
