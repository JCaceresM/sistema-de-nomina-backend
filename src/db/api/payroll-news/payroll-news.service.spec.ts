import { Test, TestingModule } from '@nestjs/testing';
import { payrollNewsService } from './payroll-news.service';

describe('CashDiscountService', () => {
  let service: payrollNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [payrollNewsService],
    }).compile();

    service = module.get<payrollNewsService>(payrollNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
