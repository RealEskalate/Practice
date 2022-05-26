import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from './db';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleService } from '../article/article.service';
import { ArticleSchema } from '../article/article.model';
import { UserService } from '../user/user.service';
import { UserSchema } from '../user/user.model';

describe('Article Testing', () => {
  let articleService: ArticleService;
  let userService: UserService;
  let module: TestingModule;

  let mockingUser;
  let mockingArticle;

  let sampleId: string;
  let wrongId = '825d207b5bc4207cc0d80844';
  let invaliedId = 'invaliedidtesting';

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }]),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      providers: [ArticleService, UserService],
    }).compile();

    articleService = module.get<ArticleService>(ArticleService);
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
      authorUserId: mockingUser._doc._id,
      title: 'how I got to do jobs using mars',
      content: 'blah blah blah mars blah blah',
    };

    await articleService.addArticle(mockingArticle);

    const sampleArt = await articleService.getAllArticle();
    sampleId = sampleArt[0]._id;
  });

  afterEach(async () => {
    await userService.deleteUser(mockingUser._doc._id);
  });

  describe('Check articleService', () => {
    it('check if service exist', async () => {
      expect(articleService).toBeDefined();
    });
  });

  describe('Check userService', () => {
    it('check if service exist', async () => {
      expect(userService).toBeDefined();
    });
  });

  describe('POST Article ', () => {
    test('POST article', async () => {
      const res = await articleService.addArticle(mockingArticle);
      expect(res).toBeDefined();
    });
  });

  describe('GET all Article ', () => {
    test('GET all articles', async () => {
      const res = await articleService.getAllArticle();
      expect(res).toBeDefined();
    });
  });

  describe('GET Article By ID', () => {
    test('respose should be defined for valied Id', async () => {
      const res = articleService.getArticleById(sampleId);
      expect(res).toBeDefined();
    });

    test("respose should be [404] for in Id that doesn't exist", async () => {
      try {
        await articleService.getArticleById(wrongId);
      } catch (e) {
        expect(e.status).toEqual(404);
      }
    });

    test('respose should be [400] for in invalied Id ', async () => {
      let invaliedId = 'slsjfskd';
      try {
        await articleService.getArticleById(invaliedId);
      } catch (e) {
        expect(e.status).toEqual(400);
      }
    });
  });

  describe('DELET Article API', () => {
    test('respose after deleting should be [success]', async () => {
      const deletedArticle = await articleService.deleteArticleById(sampleId);
      expect(deletedArticle).toBeDefined();
    });
  });

  describe('DELET Article API', () => {
    test('it should be [null] for id that doesnot exist', async () => {
      try {
        await articleService.deleteArticleById(wrongId);
      } catch (e) {
        expect(e).toEqual(null);
      }
    });
  });

  describe('DELET Article API', () => {
    test('it should be [null] for bad Id', async () => {
      try {
        await articleService.deleteArticleById(invaliedId);
      } catch (e) {
        expect(e.name).toEqual('CastError');
      }
    });
  });

  describe('PATCH Article API', () => {
    test('it should be 200', async () => {
      const res = await articleService.updateArticleById(sampleId, {
        title: 'another',
      });
      expect(res).toBeDefined();
    });

    test('it should be 404 if id is not found', async () => {
      try {
        await articleService.updateArticleById(wrongId, {
          title: 'another',
        });
      } catch (e) {
        expect(e.status).toEqual(404);
      }
    });

    test('it should be 400 for bad id', async () => {
      let invaliedId = 'jjkljdfsdfd';
      try {
        await articleService.updateArticleById(invaliedId, {
          title: 'another',
        });
      } catch (e) {
        expect(e.status).toEqual(400);
      }
    });
  });

  describe('PATCH Article Rating ', () => {
    test('rating an article, it should increament by one', async () => {
      const sampleArt = await articleService.getAllArticle();
      let sampleId = sampleArt[0]._id;

      const ratingVal = '3';
      let oldRating = sampleArt[0].rating[ratingVal];

      const ratedArticle = await articleService.rateArticleById(
        sampleId,
        ratingVal,
      );

      let newRatedVal = ratedArticle.rating[ratingVal];
      expect(newRatedVal).toBeDefined();
      expect(Number(newRatedVal) - Number(oldRating)).toBe(1);
    });

    test('rating an article that doesnot existe', async () => {
      const ratingVal = '3';
      try {
        await articleService.rateArticleById(wrongId, ratingVal);
      } catch (e) {
        expect(e.status).toBe(404);
      }
    });
  });

  describe('GET Article Rating ', () => {
    test('geting average of article', async () => {
      await articleService.rateArticleById(sampleId, '2');
      await articleService.rateArticleById(sampleId, '4');

      let avgRating = await articleService.getAverageRatingById(sampleId);
      expect(avgRating).toBeDefined();
      expect(avgRating).toBe(2 / 2 + 4 / 2);
    });

    test('geting average of article for artilce that doesnot exist', async () => {
      try {
        await articleService.getAverageRatingById(wrongId);
      } catch (e) {
        expect(e.status).toBe(404);
      }
    });
  });

  describe('GET Article Searching', () => {
    test('search article with  term in content', async () => {
      const searchTerm = mockingArticle.title.split()[0];
      let searched = await articleService.search(searchTerm);

      for (let article of searched) {
        expect(
          article.content.includes(searchTerm) ||
            article.title.includes(searchTerm),
        ).toBe(true);
      }
    });

    test('search article with term in title', async () => {
      const searchTerm = mockingArticle.title.split()[0];

      let searched = await articleService.search(searchTerm);

      for (let article of searched) {
        expect(
          article.content.includes(searchTerm) ||
            article.title.includes(searchTerm),
        ).toBe(true);
      }
    });

    test('search article with term that doesnot exist', async () => {
      const nonExistTerm = 'jjjjkkkkkkk';

      let searched = await articleService.search(nonExistTerm);
      expect(searched.length).toBe(0);
    });
  });

  describe('GET Article SearchingByTitle', () => {
    test('search article by term in titile', async () => {
      const searchTitleTerm = mockingArticle.title.split()[0];

      let searched = await articleService.search(searchTitleTerm);

      for (let article of searched) {
        expect(
          article.content.includes(searchTitleTerm) ||
            article.title.includes(searchTitleTerm),
        ).toBe(true);
      }
    });

    test('search article with term that doesnot exist on title', async () => {
      const noExistTerm = 'kkkkkkkjjjjjj';

      let searched = await articleService.searchTitle(noExistTerm);
      expect(searched.length).toBe(0);
    });
  });

  afterAll(async () => {
    if (module) {
      await module.close();
      await closeInMongodConnection();
    }
  });
});
