import {
    Body,
    Param,
    Controller,
    Delete,
    Get,
    Patch,
    Post,
} from '@nestjs/common'
import { CommentService } from './comment.service'

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Get('/:articleId/commments')
    async getAllComments(@Param('articleId') articleId: string) {
        return this.commentService.getComments(articleId);
    }

    @Get('/:id')
    async getComment(@Param('id') id: string) {
        return this.commentService.getComment(id);
    }

    @Post('/:articleId')
    async createComment(
        @Param('articleId') articleId: string,
        @Body('userId') userId: string,
        @Body('text') text: string) {
        return await this.commentService.createComment(userId, articleId, text)  
    }


    @Patch('/:id')
    async updateComment(
        @Param('id') id: string,
        @Body('text') text: string,
    ) {
        return await this.commentService.updateComment(id, text)
    }

    @Delete('/:id')
    async deleteComment(@Param('id') id: string) {
        return await this.commentService.deleteComment(id)
    }
}