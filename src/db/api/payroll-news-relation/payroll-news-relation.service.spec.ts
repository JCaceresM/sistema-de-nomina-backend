import { Test, TestingModule } from '@nestjs/testing';
import { PayrollNewsRelationService } from './payroll-news-relation.service';

describe('PayrollNewsRelationService', () => {
  let service: PayrollNewsRelationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayrollNewsRelationService],
    }).compile();

    service = module.get<PayrollNewsRelationService>(PayrollNewsRelationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
