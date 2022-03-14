import { Test, TestingModule } from '@nestjs/testing';
import { PayrollNewsService } from './payroll-news.service';

describe('CashDiscountService', () => {
  let service: PayrollNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayrollNewsService],
    }).compile();

    service = module.get<PayrollNewsService>(PayrollNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
