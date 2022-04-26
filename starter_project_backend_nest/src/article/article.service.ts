import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Article_Interface from './article.model';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article_Interface')
    private readonly articleModel: Model<Article_Interface>,
  ) {}

  async getAllArticle() {
    let allModels = await this.articleModel.find();
    return allModels;
  }

  async getArticleById(id: string) {
    let article: any;

    try {
      article = await this.articleModel.findById(id);
    } catch (e) {
      // for invalied id
      throw new NotFoundException(`Article with ${id} not found`);
    }

    if (!article) throw new NotFoundException(`Article with ${id} not found`);

    return article;
  }

  async deleteArticleById(id: string) {
    let article = await this.getArticleById(id);
    if (!article) throw new NotFoundException(`Article with ${id} not found`);
    await this.articleModel.deleteOne({ _id: id });
    return `Article with ${id} is now deleted`;
  }

  async updateArticleById(
    id: string,
    {
      author,
      title,
      content,
    }: {
      author: { name: any; lastName: any; bio: any };
      title: any;
      content: any;
    },
  ) {
    let article = await this.getArticleById(id);

    if (author && author.name) article.author.name = author.name;
    if (author && author.lastName) article.author.name = author.lastName;
    if (author && author.bio) article.author.name = author.bio;

    if (title) article.title = title;
    if (content) article.content = content;

    await article.save();
    return article;
  }

  async addArticle({
    author,
    title,
    content,
  }: {
    author: { name: String; lastName: String; bio: String };
    title: String;
    content: string;
  }) {
    let newArticle = new this.articleModel({ author, title, content });
    await newArticle.save();

    return newArticle;
  }
}
