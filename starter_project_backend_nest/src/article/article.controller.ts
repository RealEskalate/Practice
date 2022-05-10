import {
  Controller,
  Get,
  Delete,
  Patch,
  Post,
  Param,
  Body,
} from '@nestjs/common';

import { ArticleService } from './article.service';

@Controller('/api/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Get('/')
  getAllArticle() {
    return this.articleService.getAllArticle();
  }

  @Get('/:id')
  getArticleById(@Param('id') id: string) {
    return this.articleService.getArticleById(id);
  }

  @Delete('/:id')
  deleteArticleById(@Param('id') id: string) {
    return this.articleService.deleteArticleById(id);
  }

  @Patch('/:id')
  updateArticleById(@Param('id') id: string, @Body() body: any) {
    return this.articleService.updateArticleById(id, body);
  }

  @Post('/')
  addArticle(@Body() body: any) {
    return this.articleService.addArticle(body);
  }
}
