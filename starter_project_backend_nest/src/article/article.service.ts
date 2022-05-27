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
      const res = await this.articleModel.findByIdAndDelete(id);
      return res;
    } catch (e) {
      throw e;
    }
  }

  async updateArticleById(id: string, newEntries: any) {
    try {
      const article = await this.getArticleById(id);

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
    const newArticle = new this.articleModel({ authorUserId, title, content });
    await newArticle.save();

    return newArticle;
  }

  async rateArticleById(id: string, ratingValue: string) {
    try {
      const article = await this.getArticleById(id);
      article.rating[ratingValue] += 1;
      await article.save();
      return article;
    } catch (e) {
      throw e;
    }
  }

  async getAverageRatingById(id: string) {
    try {
      const article = await this.getArticleById(id);
      const rating = article.rating;
      const numOfPeople = Object.values(rating).reduce(
        (a, b) => Number(a) + Number(b),
      );

      if (numOfPeople == 0) return 0;
      let avgRating = 0;
      for (const i of [1, 2, 3, 4, 5]) {
        avgRating += (i * Number(rating[i])) / Number(numOfPeople);
      }
      return avgRating;
    } catch (e) {
      throw e;
    }
  }

  async search(searchTerm: string) {
    return await this.articleModel.find({ $text: { $search: searchTerm } });
  }
}
