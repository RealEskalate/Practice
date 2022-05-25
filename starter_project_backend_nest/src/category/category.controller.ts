import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch('/:id')
  updateCategoryById(@Param('id') id: string, @Body('CategoryName') categoryName: string) {
    return this.categoryService.updateCategoryById(id, {categoryName:categoryName});
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
