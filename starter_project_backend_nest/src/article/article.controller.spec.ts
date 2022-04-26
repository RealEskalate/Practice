import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController} from './article.controller';

describe('ArticleController', () => {
  let controller: ArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [ArticleController],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
  });

});
describe('ArticleController', () => {
  let controller: ArticleController;

  test('should be defined', () => {
    expect(controller.getArticleById).toBeDefined();
  });

});
