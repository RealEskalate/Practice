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

  @Post('/')
  @UseInterceptors(FilesInterceptor('image'))
  addArticle(
    @Request() req: any,
    @Body()
    {
      title,
      description,
      content,
      categories,
    }: {
      title: string;
      description: string;
      content: string;
      categories: string[];
    },
    @UploadedFiles() images: Array<Express.Multer.File>,
  ) {
    const authorUserId = req.user.userId;
    const newArticle = {
      authorUserId,
      title,
      description,
      content,
      categories,
    };
    return this.articleService.addArticle(newArticle, images);
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
  @Public()
  @Post('/rating/:id')
  rateArticleById(
    @Request() req: any,
    @Param('id') articleId: string,
    @Body() { rating }: { rating: string },
  ) {
    if (!rating) throw new BadRequestException('rating feild is not provided');
    return this.articleService.rateArticleById(articleId, rating);
  }

  @Public()
  @Get('/rating/:id')
  getAverageRatingById(@Param('id') id: string) {
    return this.articleService.getAverageRatingById(id);
  }
}
}
