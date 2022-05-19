import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/')
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get('/:id')
  getCategoryByID(@Param('id') id: string) {
    return this.categoryService.getCategoryByID(id);
  }

  @Delete('/:id')
  deleteCategoryById(@Param('id') id: string) {
    return this.categoryService.deleteCategoryById(id);
  }

  @Post('/')
  addCategoryById(@Body() body: any) {
    return this.categoryService.addCategory(body);
  }
}
