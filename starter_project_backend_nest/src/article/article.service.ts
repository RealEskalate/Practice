import {
  NotFoundException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Article_Interface from './article.model';
import { Model, mongo } from 'mongoose';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article')
    private readonly articleModel: Model<Article_Interface>,
    private cloudinary: CloudinaryService,
  ) {}

  async getAllArticle() {
    const allModels = await this.articleModel
      .find()
      .populate('authorUserId', '-password')
      .lean();
    return allModels;
  }

  async getArticleById(id: string) {
    let article: any;

    try {
      article = await this.articleModel
        .findById(id)
        .populate('authorUserId', '-password')
        .lean();
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
    } catch (e) {
      throw e;
    }
  }

  async updateArticleById(id: string, newEntries: any) {
    try {
      const article = await this.getArticleById(id);

      if (newEntries.title) article.title = newEntries.title;
      if (newEntries.content) article.content = newEntries.content;
      if (newEntries.description) article.description = newEntries.description;
      if (newEntries.categories) article.categories = newEntries.categories;

      await article.save();

      return article;
    } catch (e) {
      throw e;
    }
  }

  async addArticle(
    {
      authorUserId,
      description,
      title,
      content,
      categories,
    }: {
      authorUserId: string;
      description: string;
      title: string;
      content: string;
      categories: string[];
    },
    images: Express.Multer.File[] = [],
  ) {
    try {
      const imageUrls: Array<string> = [];

      for (const image of images) {
        const res = await this.cloudinary.uploadImage(image);
        const url = res.url;
        imageUrls.push(url);
      }

      const newArticle = new this.articleModel({
        authorUserId: new mongo.ObjectId(authorUserId),
        title: title,
        content: content,
        categories: categories,
        imageUrls: imageUrls,
        description: description,
      });

      const new_artilce = await newArticle.save();
      if (!new_artilce) {
        return new NotFoundException();
      }
      return await this.getArticleById(new_artilce._id);
    } catch (e) {
      throw new BadRequestException(e);
    }
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
