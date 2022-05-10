import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from './db';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleService } from '../article/article.service';
import { ArticleSchema } from '../article/article.model';

let sampleArticle = {
  authorUserId: '324231234',
  title: 'how I got to do jobs using mars',
  content: 'blah blah blah mars blah blah',
};

describe('Article Testing', () => {
  let service: ArticleService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: 'Article_Interface', schema: ArticleSchema },
        ]),
      ],
      providers: [ArticleService],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
  });

  beforeEach(async () => {
    await service.addArticle(sampleArticle);
  });

  describe('check if artilce seted up', () => {
    it('check if user exist', async () => {
      expect(service).toBeDefined();
    });
  });

  describe('POST Article ', () => {
    test('POST article', async () => {
      const res = await service.addArticle(sampleArticle);
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
      let invaliedId = 'lksjfklsd';
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
  });
  afterAll(async () => {
    if (module) {
      await module.close();
      await closeInMongodConnection();
    }
  });
});
