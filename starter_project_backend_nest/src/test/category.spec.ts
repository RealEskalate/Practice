import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CategorySchema } from '../category/category.model';
import { CategoryController } from '../category/category.controller';
import { CategoryService } from '../category/category.service';
import { rootMongooseTestModule } from './db';
import { NotFoundError } from 'rxjs';
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

describe('CategoryTesting', () => {
  let service: CategoryService;
  let controller: CategoryController;
  let module: TestingModule;
  let category: any;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          {
            name: 'CategoryI',
            schema: CategorySchema,
          },
        ]),
      ],
      providers: [CategoryService],
      controllers: [CategoryController],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    controller = module.get<CategoryController>(CategoryController);
  });

  beforeAll(async () => {
    category = await service.addCategory({
      categoryName: 'essay',
    });
    category._id = category._id.toString();
  });

  it('Controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('It should get all categories', async () => {
    const categories = await controller.getAllCategories();
    expect(categories).toBeDefined();
  });

  it('it should get category by id', async () => {
    const response = await controller.getCategoryByID(category._id);
    expect(response.categoryName).toEqual(category.categoryName);
  });

  it('it should not get for unknown id', async () => {
    try {
      const response = await controller.getCategoryByID(category._id);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });

  it('it should create category', async () => {
    const newCategory = await controller.addCategoryById({
      categoryName: 'philosophy',
    });

    expect(newCategory).toBeDefined();
  });

  it('it should update for exisiting category', async () => {
    const newCategory = await controller.addCategoryById({
      categoryName: 'new',
    });

    const newCategory2 = await controller.updateCategoryById(
      newCategory._id,
      'changed',
    );
    expect(newCategory2).toBeDefined();
  });

  it('it should not update non exisiting category', async () => {
    try {
      await controller.updateCategoryById('null', 'changed');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
    }
  });

  it('it should delete category using id', async () => {
    const newCategory = await controller.addCategoryById({
      categoryName: 'tobedeleted',
    });
    const response = await controller.deleteCategoryById(newCategory._id);
    try {
      const getDeleted = await controller.getCategoryByID(newCategory._id);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });

  it("it should not delete category that doesn't exist", async () => {
    try {
      const response = await controller.deleteCategoryById(null);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });
});
