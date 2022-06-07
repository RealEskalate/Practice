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

@Controller('/api/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Public()
  @Get('/:articleId')
  async getAllComments(@Param('articleId') articleId: string) {
    return this.commentService.getComments(articleId);
  }

  @Public()
  @Get('/:articleId/:id')
  async getComment(@Param('id') id: string) {
    return this.commentService.getComment(id);
  }

  @Post('/:articleId')
  async createComment(
    @Param('articleId') articleId: string,
    @Body('text') text: string,
    @Request() req: any,
  ) {
    const userId = req.user.userId;
    return await this.commentService.createComment(userId, articleId, text);
  }

  @Patch('/:articleId/:id')
  async updateComment(
    @Request() req: any,
    @Param('id') id: string,
    @Body('text') text: string,
  ) {
    return await this.commentService.updateComment(req, id, text);
  }

  @Delete('/:id')
  async deleteComment(@Request() req: any, @Param('id') id: string) {
    return await this.commentService.deleteComment(req, id);
  }
}
