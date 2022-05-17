import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IComment from './comment.model';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private readonly commentModel: Model<IComment>,
  ) {}

  async createComment(userId: string, articleId: string, text: string) {
    try {
      const newComment = await this.commentModel.create({
        userId,
        articleId,
        text,
      });

      return newComment;
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async getComments(articleId: string) {
    const comments = await this.commentModel
      .find({ articleId })
      .populate('userId')
      .select('-password');
    return comments;
  }

  async getComment(id: string) {
    try {
      const comment = await this.commentModel
        .findById(id)
        .populate('userId')
        .select('-password');
      if (!comment) {
        throw new NotFoundException('Not found');
      }
      return comment;
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async updateComment(id: string, text: string) {
    const comment = await this.commentModel.findById(id);
    if (!comment) {
      throw new NotFoundException();
    }
    if (text) {
      comment.text = text;
    }
    await comment.save();
    return comment;
  }

  async deleteComment(id: string) {
    try {
      const comment = await this.commentModel.findById(id);
      if (!comment) {
        throw new NotFoundException();
      }
      await this.commentModel.deleteOne({ _id: id });
      return comment;
    } catch (e) {
      throw new BadRequestException();
    }
  }
}
