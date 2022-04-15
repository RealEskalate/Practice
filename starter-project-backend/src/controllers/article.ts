import {Response, Request, NextFunction} from "express"
import {Article, Article_Interface}  from "../models/article"

export async function getAllArticle(req:Request, res:Response, next:NextFunction)
{
  console.log("get all article")

  let articles = await Article.find({}) 
  res.status(200).json({data: articles})
}

export async function getArticleById( req:Request,res:Response, next:NextFunction)
{
  console.log("get article with id", )
  console.log(req.body.id)

  let article = await Article.findOne({id: req.body.id}) 
  res.send({data: article})
}

export async function addArticle(req:Request, res:Response,  next:NextFunction)
{
  console.log("addint article article")
  
  let {id, author, title, content} = req.body
  console.log(id, author, title, content)

  let newArticle =  new Article({id, author, title, content})
  await newArticle.save()

  res.end()
}



export async function updateArticleById( req:Request, res:Response, next:NextFunction)
{

  let article = await Article.findOne({id:req.params.id})
  console.log(article)
  if(!article){res.send({data:{}}); return};

  
  let {id, author, title, content} = req.body
  //@ts-ignore
  if(id){ article.id = id};
  if(author) {article.author = author};
  if(title) {article.title= title};
  if(content){article.content = content;};

  await article.save()

  res.json({after:article})

}
export async function deleteArticleById( req:Request, res:Response, next:NextFunction)
{

  console.log("deleting article", req.params.id)
  await Article.deleteOne({id:req.params.id}) 
  res.json({data:"deleted "})

}
