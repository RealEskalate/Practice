import { Test, TestingModule } from '@nestjs/testing';
import { CloudinaryService } from './cloudinary.service';

describe('Cloudinary', () => {
  let provider: CloudinaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloudinaryService],
    }).compile();

    provider = module.get<CloudinaryService>(CloudinaryService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
