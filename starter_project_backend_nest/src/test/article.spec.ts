import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from './db';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleService } from '../article/article.service';
import { ArticleSchema } from '../article/article.model';
import { UserService } from '../user/user.service';
import { UserSchema } from '../user/user.model';
import { CloudinaryModule } from './../cloudinary/cloudinary.module';

class MockingCloudinaryModule extends CloudinaryModule {
  uploadImage(Image) {
    return 'random/url' + Math.random();
  }
}

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
        MockingCloudinaryModule,
      ],
      providers: [ArticleService, UserService],
    }).compile();

    articleService = module.get<ArticleService>(ArticleService);
    userService = module.get<UserService>(UserService);
  });

  beforeEach(async () => {
    mockingUser = await userService.createUser(
      'test_email',
      'test_fullName',
      'test_password',
    );

    mockingArticle = {
<<<<<<< HEAD
      authorUserId: mockingUser._id,
      title: 'how I got to do jobs using mars',
      content: 'blah blah blah mars blah blah',
      categories: [],
=======
      authorUserId: mockingUser._doc._id,
      title: 'sample testing title',
      description: 'sample testing description',
      content: 'sample testing content',
>>>>>>> ca5b6792715d6f6e6f228e58d7773d77c00495c7
    };

    await articleService.addArticle(mockingArticle);

    const allArticles = await articleService.getAllArticle();
    sampleId = allArticles[0]._id;
  });

  afterEach(async () => {
    await userService.deleteUser(mockingUser._doc._id);
    for (let article of await articleService.getAllArticle()) {
      await articleService.deleteArticleById(article._id);
    }
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
    test('response should be defined for valid Id', async () => {
      const res = articleService.getArticleById(sampleId);
      expect(res).toBeDefined();
    });

    test("response should be [404] for in Id that doesn't exist", async () => {
      try {
        await articleService.getArticleById(wrongId);
      } catch (e) {
        expect(e.status).toEqual(404);
      }
    });

    test('response should be [400] for in invalid Id ', async () => {
      let invaliedId = 'slsjfskd';
      try {
        await articleService.getArticleById(invaliedId);
      } catch (e) {
        expect(e.status).toEqual(400);
      }
    });
  });

  describe('DELETE Article API', () => {
    test('response after deleting should be [success]', async () => {
      const deletedArticle = await articleService.deleteArticleById(sampleId);
      expect(deletedArticle).toBeDefined();
    });
  });

  describe('DELETE Article API', () => {
    test('it should be [null] for id that does not exist', async () => {
      try {
        await articleService.deleteArticleById(wrongId);
      } catch (e) {
        expect(e).toEqual(null);
      }
    });
  });

  describe('DELETE Article API', () => {
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
<<<<<<< HEAD
        title: 'another',
        categories: ['categoryid1'],
=======
        title: 'updated title',
>>>>>>> ca5b6792715d6f6e6f228e58d7773d77c00495c7
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
    test('rating an article, it should increment by one', async () => {
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

    test('rating an article that does not exist', async () => {
      const ratingVal = '3';
      try {
        await articleService.rateArticleById(wrongId, ratingVal);
      } catch (e) {
        expect(e.status).toBe(404);
      }
    });
  });

  describe('GET Article Rating ', () => {
    test('getting average of article', async () => {
      await articleService.rateArticleById(sampleId, '2');
      await articleService.rateArticleById(sampleId, '4');

      let avgRating = await articleService.getAverageRatingById(sampleId);
      expect(avgRating).toBeDefined();
      expect(avgRating).toBe(2 / 2 + 4 / 2);
    });

    test('getting average of article for article that does not exist', async () => {
      try {
        await articleService.getAverageRatingById(wrongId);
      } catch (e) {
        expect(e.status).toBe(404);
      }
    });
  });

  describe('GET Article Searching', () => {
    test('search article with one term', async () => {
      const searchTerm = mockingArticle.content.split(' ')[0];

      let searched = await articleService.search(searchTerm);
      for (let article of searched) {
        expect(
          article.description.includes(searchTerm) ||
            article.title.includes(searchTerm),
        ).toBe(true);
      }
    });

    test('search article with two terms in ', async () => {
      const term1 = mockingArticle.title.split(' ')[0];
      const term2 = mockingArticle.content.split(' ')[0];

      let searched = await articleService.search(term1 + ' ' + term2);

      expect(searched.length).toBeGreaterThan(0);

      for (let article of searched) {
        expect(
          article.description.includes(term1) ||
            article.title.includes(term1) ||
            article.description.includes(term2) ||
            article.title.includes(term2),
        ).toBe(true);
      }
    });

    test('search article with term that doesnot exist', async () => {
      const nonExistTerm = 'jjjjkkkkkkk';

      let searched = await articleService.search(nonExistTerm);
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
