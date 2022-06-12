import {
  Controller,
  Get,
  Delete,
  Query,
  Request,
  Patch,
  Post,
  Param,
  Body,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
} from '@nestjs/common';

import { FilesInterceptor } from '@nestjs/platform-express';
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
  @Get('/search')
  search(@Query('search-term') searchTerm: string) {
    return this.articleService.search(searchTerm);
  }

  @Public()
  @Get('/:id')
  getArticleById(@Param('id') id: string) {
    return this.articleService.getArticleById(id);
  }

  @Patch('/:id')
  updateArticleById(
    @Request() req: any,
    @Param('id') id: string,
    @Body() body: any,
  ) {
    return this.articleService.updateArticleById(req.user.userId, id, body);
  }
  
  @Delete('/:id')
  deleteArticleById(@Request() req: any, @Param('id') articleId: string) {
    return this.articleService.deleteArticleById(req.user.userId, articleId);
  }

 

 
}
