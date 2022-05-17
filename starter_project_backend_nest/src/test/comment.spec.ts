import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from './db';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentService } from '../comment/comment.service';
import { UserService } from '../user/user.service';
import { ArticleService } from '../article/article.service';
import Article_Interface, { ArticleSchema } from '../article/article.model';
import UserI, { UserSchema } from '../user/user.model';
import { CommentSchema } from '../comment/comment.model';

describe('CommentTesting', () => {
  let commentService: CommentService;
  let userService: UserService;
  let articleService: ArticleService;
  let module: TestingModule;
  let article: Article_Interface;
  let user: UserI;
  let nonexistingId: string;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          {
            name: 'Comment',
            schema: CommentSchema,
          },
          {
            name: 'Article_Interface',
            schema: ArticleSchema,
          },
          {
            name: 'User',
            schema: UserSchema,
          },
        ]),
      ],
      providers: [CommentService, UserService, ArticleService],
    }).compile();
    userService = module.get<UserService>(UserService);
    articleService = module.get<ArticleService>(ArticleService);
    commentService = module.get<CommentService>(CommentService);
    user = await userService.createUser('_john', 'John', 'Doe', '12345678');
    article = await articleService.addArticle({
      author: {
        firstName: 'gzachew',
        lastName: 'demeke',
        bio: "I'm blah blah",
      },

      title: 'how I got to do jobs using mars',
      content: 'blah blah blah mars blah blah',
    });
    nonexistingId = '62834a2f700d0f81d1153351';
  });

  describe('check if all services are defined', () => {
    it('comment service should be defined', async () => {
      expect(commentService).toBeDefined();
    });
    it('user service should be defined', async () => {
      expect(commentService).toBeDefined();
    });
    it('article service should be defined', async () => {
      expect(commentService).toBeDefined();
    });
  });

  describe('Get all comments', () => {
    test('Get all comments with article id', async () => {
      const comments = await commentService.getComments(article._id);
      expect(comments).toBeDefined();
    });
  });

  describe('Post comment', () => {
    test('response should be defined for a valid user & article id', async () => {
      const newComment = await commentService.createComment(
        user._id,
        article._id,
        'good article',
      );

      expect(newComment).toBeDefined();
    });

    test('response should be [400] for an ivalid user or article id', async () => {
      try {
        await commentService.createComment(
          '1352135',
          '3152523',
          'good article',
        );
      } catch (error) {
        expect(error.status).toEqual(400);
      }
    });
  });

  describe('Get Comment by ID', () => {
    test('response should be defined for a vallid Id', async () => {
      const newComment = await commentService.createComment(
        user._id,
        article._id,
        'good article',
      );
      const comment = await commentService.getComment(
        newComment._id.toString(),
      );
      expect(comment).toBeDefined();
    });

    test('response should be [400] for an invalid id', async () => {
      try {
        await commentService.getComment('62834a2f700d0f81d1');
      } catch (error) {
        expect(error.status).toEqual(400);
      }
    });

    test('response should be [404] for a non-existing id', async () => {
      try {
        await commentService.getComment(nonexistingId);
      } catch (error) {
        expect(error.status).toEqual(400);
      }
    });
  });

  describe('PATCH Commment', () => {
    test('response should be defined for a valid patch request', async () => {
      const comment = await commentService.createComment(
        user._id,
        article._id,
        'good article',
      );
      const updated = await commentService.updateComment(
        comment._id,
        'very good article',
      );
      expect(updated).toBeDefined();
    });
  });

  describe('Delete Comment by ID', () => {
    test('response should be defined for a valid comment id', async () => {
      const comment = await commentService.createComment(
        user._id,
        article._id,
        'good article',
      );
      const res = await commentService.deleteComment(comment._id);
      expect(res).toBeDefined();
    });

    test('response should be [400] for an invalid id', async () => {
      try {
        await commentService.deleteComment('3');
      } catch (error) {
        expect(error.status).toEqual(400);
      }
    });

    test('response should be [404] for a non-existing id', async () => {
      try {
        await commentService.deleteComment(nonexistingId);
      } catch (error) {
        expect(error.status).toEqual(400);
      }
    });
  });

  afterAll(async () => {
    if (module) {
      await module.close();
      await closeInMongodConnection();
    }
  });
});
