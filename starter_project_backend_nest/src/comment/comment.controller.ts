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
  @Get('comment/:id')
  async getComment(@Param('id') id: string) {
    return this.commentService.getComment(id);
  }

  @Public()
  @Get('/:articleId')
  async getAllComments(@Param('articleId') articleId: string) {
    return this.commentService.getComments(articleId);
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

  @Delete('/:id')
  async deleteComment(@Request() req: any, @Param('id') id: string) {
    return await this.commentService.deleteComment(req, id);
  }
}
