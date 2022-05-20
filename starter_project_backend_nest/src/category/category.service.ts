import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import CategoryI from './category.model';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('CategoryI')
    private readonly categoryModel: Model<CategoryI>,
  ) {}
  async addCategory({ categoryName, articles }) {
    let categoryExists = await this.categoryModel.findOne({
      categoryName: categoryName,
    });
    let result: any;
    if (categoryExists) {
      result = await this.categoryModel.updateOne(
        { categoryName: categoryName },
        {
          $push: { articles: articles },
        },
      );
    } else {
      result = await this.categoryModel.create({
        categoryName: categoryName,
        articles: articles,
      });
    }
    let category = await this.categoryModel.findOne({
      categeoryName: categoryName,
    });
    
    return category;
  }
  async deleteCategoryById(id: string) {
    let category = await this.getCategoryByID(id);
    if (!category)
      throw new NotFoundException(`Category with id ${id} not found`);
    await this.categoryModel.deleteOne({ _id: id });
  }
  async getCategoryByID(id: string) {
    const category = await this.categoryModel.findOne({ _id: id });
    if (!category)
      throw new NotFoundException(`Category with id ${id} not found`);
    return category;
  }
  async getAllCategories() {
    const categories = await this.categoryModel.find();
    return categories;
  }
}
