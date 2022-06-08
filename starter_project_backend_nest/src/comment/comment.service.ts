import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from '../user/user.service';
import IComment from './comment.model';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private readonly commentModel: Model<IComment>,
    private readonly userService: UserService,
  ) {}

  async createComment(userId: string, articleId: string, text: string) {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new NotFoundException();
    }

    if (!text) {
      throw new BadRequestException();
    }
    const newComment = await this.commentModel.create({
      user: userId,
      articleId,
      text,
    });

    return newComment;
  }

  async getComments(articleId: string) {
    const comments = await this.commentModel
      .find({ articleId })
      .populate('user', '-password');
    return comments;
  }

  async getComment(id: string) {
    try {
      const comment = await this.commentModel
        .findById(id)
        .populate('user', '-password')
        .populate('articleId');
      if (!comment) {
        throw new NotFoundException('Not found');
      }
      return comment;
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async updateComment(userId: string, id: string, text?: string) {
    try {
      const comment = await this.commentModel.findById(id);
      if (!comment) {
        throw new NotFoundException();
      }
      if (comment.user.toString() != userId) {
        throw new ForbiddenException();
      }
      if (text) {
        comment.text = text;
      }
      await comment.save();
      return comment;
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async deleteComment(userId: string, id: string) {
    try {
      const comment = await this.commentModel.findById(id);
      if (!comment) {
        throw new NotFoundException();
      }

      if (comment.user.toString() != userId) {
        throw new ForbiddenException();
      }
      await this.commentModel.deleteOne({ _id: id });
      return comment;
    } catch (e) {
      throw new BadRequestException();
    }
  }
}
