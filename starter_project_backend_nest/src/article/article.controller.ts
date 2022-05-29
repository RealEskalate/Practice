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

  @Delete('/:id')
  deleteArticleById(@Param('id') id: string) {
    return this.articleService.deleteArticleById(id);
  }

  @Patch('/:id')
  updateArticleById(@Param('id') id: string, @Body() body: any) {
    return this.articleService.updateArticleById(id, body);
  }

  @Post('/')
  @UseInterceptors(FilesInterceptor('image'))
  addArticle(
    @Request() req: any,
    @Body() { title, content }: { title: string; content: string },
    @UploadedFiles() images: Array<Express.Multer.File>,
  ) {
    const authorUserId = req.user.userId;
    const newArticle = { authorUserId, title, content };

    return this.articleService.addArticle(newArticle, images);
  }

  @Public()
  @Post('/rating/:id')
  rateArticleById(
    @Param('id') id: string,
    @Body() { rating }: { rating: string },
  ) {
    return this.articleService.rateArticleById(id, rating);
  }

  @Public()
  @Get('/rating/:id')
  getAverageRatingById(@Param('id') id: string) {
    return this.articleService.getAverageRatingById(id);
  }
}
