import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from './db';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleService } from '../article/article.service';
import { ArticleSchema } from '../article/article.model';
import { UserService } from '../user/user.service';
import { UserSchema } from '../user/user.model';

describe('Article Testing', () => {
  let service: ArticleService;
  let userService: UserService;
  let module: TestingModule;

  let mockingUser;
  let mockingArticle;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: 'Article_Interface', schema: ArticleSchema },
        ]),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      providers: [ArticleService, UserService],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
    userService = module.get<UserService>(UserService);
  });

  beforeEach(async () => {
    mockingUser = await userService.createUser(
      'test_user_name',
      'test_first_name',
      'test_last_name',
      'test_password',
    );

    mockingArticle = {
      authorUserId: mockingUser._id,
      title: 'how I got to do jobs using mars',
      content: 'blah blah blah mars blah blah',
    };
    await service.addArticle(mockingArticle);
  });

  afterEach(async () => {
    await userService.deleteUser(mockingUser._id);
  });

  describe('check if artilce seted up', () => {
    it('check if user exist', async () => {
      expect(service).toBeDefined();
    });
  });

  describe('POST Article ', () => {
    test('POST article', async () => {
      const res = await service.addArticle(mockingArticle);
      expect(res).toBeDefined();
    });
  });

  describe('GET all Article ', () => {
    test('GET all articles', async () => {
      const res = await service.getAllArticle();
      expect(res).toBeDefined();
    });
  });

  describe('GET Article By ID', () => {
    test('respose should be defined for valied Id', async () => {
      const sampleArt = await service.getAllArticle();
      let sampleId = sampleArt[0]._id;
      const res = service.getArticleById(sampleId);
      expect(res).toBeDefined();
    });

    test("respose should be [404] for in Id that doesn't exist", async () => {
      let wrongId = '825d207b5bc4207cc0d80844';
      try {
        await service.getArticleById(wrongId);
      } catch (e) {
        expect(e.status).toEqual(404);
      }
    });

    test('respose should be [400] for in invalied Id ', async () => {
      let invaliedId = 'slsjfskd';
      try {
        await service.getArticleById(invaliedId);
      } catch (e) {
        expect(e.status).toEqual(400);
      }
    });
  });

  describe('DELET Article API', () => {
    test('respose after deleting should be [success]', async () => {
      const sampleArt = await service.getAllArticle();
      let sampleId = sampleArt[0]._id;
      const res = await service.deleteArticleById(sampleId);
      expect(res).toEqual('success');
    });

    test('it should be [404] for id that doesnot exist', async () => {
      let wrongId = '825d207b5bc4207cc0d80844';
      try {
        await service.deleteArticleById(wrongId);
      } catch (e) {
        expect(e.status).toEqual(404);
      }
    });

    test('it should be [400] for bad Id', async () => {
      let invaliedId = 'invaliedidtesting';
      try {
        await service.deleteArticleById(invaliedId);
      } catch (e) {
        expect(e.status).toEqual(400);
      }
    });
  });

  describe('PATCH Article API', () => {
    test('it should be 200', async () => {
      const sampleArt = await service.getAllArticle();
      let sampleId = sampleArt[0]._id;
      const res = await service.updateArticleById(sampleId, {
        title: 'another',
      });
      expect(res).toBeDefined();
    });

    test('it should be 404 if id is not found', async () => {
      let wrongId = '825d207b5bc4207cc0d80844';
      try {
        await service.updateArticleById(wrongId, {
          title: 'another',
        });
      } catch (e) {
        expect(e.status).toEqual(404);
      }
    });

    test('it should be 400 for bad id', async () => {
      let invaliedId = 'jjkljdfsdfd';
      try {
        await service.updateArticleById(invaliedId, {
          title: 'another',
        });
      } catch (e) {
        expect(e.status).toEqual(400);
      }
    });

    // rating test
    describe('Rating of an article', () => {
      test('rating an article, it should increament by one', async () => {
        const sampleArt = await service.getAllArticle();
        let sampleId = sampleArt[0]._id;

        const ratingVal = '3';
        let oldRating = sampleArt[0].rating[ratingVal];

        const ratedArticle = await service.rateById(sampleId, ratingVal);

        let newRatedVal = ratedArticle.rating[ratingVal];
        expect(newRatedVal).toBeDefined();
        expect(Number(newRatedVal) - Number(oldRating)).toBe(1);
      });

      test('geting average of article', async () => {
        const sampleArt = await service.getAllArticle();
        let sampleId = sampleArt[0]._id;

        await service.rateById(sampleId, '2');
        await service.rateById(sampleId, '4');

        let avgRating = await service.getAverageRatingById(sampleId);
        expect(avgRating).toBeDefined();
        expect(avgRating).toBe(2 / 2 + 4 / 2);
      });
    });
  });

  afterAll(async () => {
    if (module) {
      await module.close();
      await closeInMongodConnection();
    }
  });
});
