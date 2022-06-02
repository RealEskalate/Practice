import {
  NotFoundException,
  BadRequestException,
  Injectable,
  ForbiddenException,
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
      throw new BadRequestException(`${id} doesn't have valied format`);
    }

    if (!article) throw new NotFoundException(`Article with ${id} not found`);

    return article;
  }

  async deleteArticleById(userId: string, articleId: string) {
    try {
      const article = await this.articleModel.findById(articleId);
      if (!article)
        throw new NotFoundException(`Article with ${articleId} not found`);

      if (article.authorUserId.toString() != userId) {
        console.log(article.authorUserId.toString(), userId);
        throw new ForbiddenException(
          'Only the Author article can delete the article',
        );
      }
      const res = await this.articleModel.findByIdAndDelete(articleId);
      return res; // deleted article as success respose
    } catch (e) {
      throw e;
    }
  }

  async updateArticleById(userId: string, articleId: string, newEntries: any) {
    try {
      //const article = await this.getArticleById(id);
      // you can't use save() for populated one
      const article = await this.articleModel.findById(articleId);
      if (!article)
        throw new NotFoundException(`Article with ${articleId} not found`);

      if (article.authorUserId.toString() != userId) {
        throw new ForbiddenException(
          'Only the Author of the article can update the article',
        );
      }

      let updated = false;
      if (newEntries.title) {
        article.title = newEntries.title;
        updated = true;
      }
      if (newEntries.content) {
        article.content = newEntries.content;
        updated = true;
      }
      if (newEntries.description) {
        article.description = newEntries.description;
        updated = true;
      }
      if (newEntries.categories) {
        article.categories = newEntries.categories;
        updated = true;
      }

      if (updated == false)
        throw new BadRequestException('no valied field to update');

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

  async rateArticleById(articleId: string, ratingValue: string) {
    try {
      const article = await this.articleModel.findById(articleId);
      if (Number(ratingValue) > 5 || Number(ratingValue) < 0) {
        throw new BadRequestException('rating value  should be 0 - 5');
      }

      article.rating[ratingValue] += 1;
      await article.save();
      return article.rating;
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
