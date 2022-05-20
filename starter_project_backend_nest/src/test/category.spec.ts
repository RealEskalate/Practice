import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CategorySchema } from '../category/category.model';
import { CategoryController } from '../category/category.controller';
import { CategoryService } from '../category/category.service';
import { rootMongooseTestModule } from './db';
import { NotFoundError } from 'rxjs';
import { NotFoundException } from '@nestjs/common';

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
      articles: ['articleid1', 'articleid2'],
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
    let response = await controller.getCategoryByID(category._id);
    expect(response.categoryName).toEqual(category.categoryName);
  });

  it('it should not get for unknown id', async () => {
    try {
      let response = await controller.getCategoryByID(category._id);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });

  it('it should create category', async () => {
    let newCategory = await controller.addCategoryById({
      categoryName: 'philosophy',
      articles: [],
    });

    expect(newCategory).toBeDefined();
  });

  it('it should update for exisiting category', async () => {
    let newCategory = await controller.addCategoryById({
      categoryName: 'new',
      articles: ['articleid1'],
    });

    let newCategory2 = await controller.addCategoryById({
      categoryName: 'philosophy',
      articles: ['articleid2'],
    });
    expect(newCategory2).toBeDefined();
  });

  it('it should delete category using id', async () => {
    let newCategory = await controller.addCategoryById({
      categoryName: 'new',
      articles: ['articleid1'],
    });
    let response = await controller.deleteCategoryById(newCategory._id);
    try {
      let getDeleted = await controller.getCategoryByID(newCategory._id);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });

  it("it should not delete category that doesn't exist", async () => {
    try {
      let response = await controller.deleteCategoryById(null);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });
});
