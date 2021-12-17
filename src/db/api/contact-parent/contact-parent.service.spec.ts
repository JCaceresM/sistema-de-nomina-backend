import { Test, TestingModule } from '@nestjs/testing';
import { ContactParentService } from './contact-parent.service';

describe('ContactParentService', () => {
  let service: ContactParentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactParentService],
    }).compile();

    service = module.get<ContactParentService>(ContactParentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
