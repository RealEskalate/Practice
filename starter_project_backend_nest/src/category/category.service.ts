import {
  BadRequestException,
  Body,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import CategoryI from './category.model';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('CategoryI')
    private readonly categoryModel: Model<CategoryI>,
  ) {}
  async addCategory({ categoryName }) {
    categoryName = categoryName.toLowerCase();
    let categoryExists = await this.categoryModel.findOne({
      categoryName: categoryName,
    });

    if (categoryExists) {
      throw new ConflictException();
    } else {
      await this.categoryModel.create({
        categoryName: categoryName,
      });
    }
    let category = await this.categoryModel.findOne({
      categeoryName: categoryName,
    });

    return category;
  }

  async updateCategoryById(id: string, categoryName) {
    try {
      let category = await this.getCategoryByID(id);
      category.categoryName = categoryName || category.categoryName;
      await category.save();

      return await this.getCategoryByID(id);
    } catch (e) {
      throw e;
    }
  }

  async deleteCategoryById(id: string) {
    let category = await this.getCategoryByID(id);
    if (!category)
      throw new NotFoundException(`Category with id ${id} not found`);
    await this.categoryModel.deleteOne({ _id: id });
  }
  async getCategoryByID(id: string) {
    try {
      const category = await this.categoryModel.findById(id);
      if (!category) {
        throw new NotFoundException(`${id} doesn't exist`);
      }
      return category;
    } catch (e) {
      throw new BadRequestException(`${id} is not a valid id`);
    }
  }
  async getAllCategories() {
    const categories = await this.categoryModel.find();
    return categories;
  }
}
