import {
  Body,
  Param,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { Public } from 'src/auth/constants';
import { CommentService } from './comment.service';

@Controller('/api/articles/')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Public()
  @Get('/:articleId/comments')
  async getAllComments(@Param('articleId') articleId: string) {
    return this.commentService.getComments(articleId);
  }

  @Public()
  @Get('/:articleId/comments/:id')
  async getComment(@Param('id') id: string) {
    return this.commentService.getComment(id);
  }

  @Post('/:articleId/comments')
  async createComment(
    @Param('articleId') articleId: string,
    @Body('text') text: string,
    @Request() req: any,
  ) {
    const userId = req.user.userId;
    return await this.commentService.createComment(userId, articleId, text);
  }

  @Patch('/:articleId/comments/:id')
  async updateComment(@Param('id') id: string, @Body('text') text: string) {
    return await this.commentService.updateComment(id, text);
  }

  @Delete('/:articleId/comments/:id')
  async deleteComment(@Param('id') id: string) {
    return await this.commentService.deleteComment(id);
  }
}
