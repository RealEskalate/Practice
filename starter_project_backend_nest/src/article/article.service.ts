import {
  NotFoundException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
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
    const allModels = await this.articleModel.find();
    return allModels;
  }

  async getArticleById(id: string) {
    let article: any;

    try {
      article = await this.articleModel.findById(id);
    } catch (e) {
      // for invalied id
      throw new BadRequestException(`${id} is doesn't have valied format`);
    }

    if (!article) throw new NotFoundException(`Article with ${id} not found`);

    return article;
  }

  async deleteArticleById(id: string) {
    try {
      await this.getArticleById(id);
      await this.articleModel.findByIdAndDelete(id);
      return `success`;
    } catch (e) {
      throw e;
    }
  }

  async updateArticleById(id: string, newEntries: any) {
    try {
      let article = await this.getArticleById(id);

      if (newEntries.title) article.title = newEntries.title;
      if (newEntries.content) article.content = newEntries.content;

      await article.save();

      return article;
    } catch (e) {
      throw e;
    }
  }

  async addArticle({
    authorUserId,
    title,
    content,
  }: {
    authorUserId: string;
    title: string;
    content: string;
  }) {
    let newArticle = new this.articleModel({ authorUserId, title, content });
    await newArticle.save();

    return newArticle;
  }
}
