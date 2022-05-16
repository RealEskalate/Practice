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



  @Delete('/:id')
  async deleteComment(@Request() req: any, @Param('id') id: string) {
    return await this.commentService.deleteComment(req, id);
  }
}
