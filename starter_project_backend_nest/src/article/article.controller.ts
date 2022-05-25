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
  @Get('/search')
  searchEveryThing(@Query('search-term') searchTerm: string) {
    return this.articleService.searchEveryThing(searchTerm);
  }

  @Public()
  @Get('/search-title')
  searchContent(@Query('search-term') searchTerm: string) {
    console.log(searchTerm);
    return this.articleService.searchTitle(searchTerm);
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
    let authorUserId = req.user?.userId;
    let newArticle = { authorUserId, title, content };
    return this.articleService.addArticle(newArticle);
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
