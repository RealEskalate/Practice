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
    @InjectModel('Article')
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
      let res = await this.articleModel.findByIdAndDelete(id);
      return res;
    } catch (e) {
      throw e;
    }
  }

  async updateArticleById(id: string, newEntries: any) {
    try {
      let article = await this.getArticleById(id);

      const result = await this.articleModel.updateOne({
        _id: article._id,
        title: newEntries.title || article.title,
        content: newEntries.content || article.content,
        categories: newEntries.categories || article.categories,
      });

      return result;
    } catch (e) {
      throw e;
    }
  }

  async addArticle({
    authorUserId,
    title,
    content,
    categories,
  }: {
    authorUserId: string;
    title: string;
    content: string;
    categories: [];
  }) {
    let newArticle = new this.articleModel({
      authorUserId,
      title,
      content,
      categories,
    });
    await newArticle.save();

    return newArticle;
  }

  async rateArticleById(id: string, ratingValue: string) {
    try {
      let article = await this.getArticleById(id);
      article.rating[ratingValue] += 1;
      await article.save();
      return article;
    } catch (e) {
      throw e;
    }
  }

  async getAverageRatingById(id: string) {
    try {
      let article = await this.getArticleById(id);
      let rating = article.rating;
      let numOfPeople = Object.values(rating).reduce(
        (a, b) => Number(a) + Number(b),
      );

      if (numOfPeople == 0) return 0;
      let avgRating = 0;
      for (let i of [1, 2, 3, 4, 5]) {
        avgRating += (i * Number(rating[i])) / Number(numOfPeople);
      }
      return avgRating;
    } catch (e) {
      throw e;
    }
  }
}
