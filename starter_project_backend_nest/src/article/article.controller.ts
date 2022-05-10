import {
  Controller,
  Get,
  Delete,
  Request,
  Patch,
  Post,
  Param,
  Body,
} from '@nestjs/common';

import { ArticleService } from './article.service';
import { Public } from '../auth/constants';

@Controller('/api/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Public()
  @Get('/all')
  getAllArticle() {
    return this.articleService.getAllArticle();
  }

  @Public()
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
  addArticle(
    @Request() req,
    @Body() { title, content }: { title: string; content: string },
  ) {
    let newArticle = { authorUserId: req.user.userId, title, content };
    return this.articleService.addArticle(newArticle);
  }
}
