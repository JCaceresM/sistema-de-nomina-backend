import { Test, TestingModule } from '@nestjs/testing';
import { CashDiscountService } from './cash-discount.service';

describe('CashDiscountService', () => {
  let service: CashDiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashDiscountService],
    }).compile();

    service = module.get<CashDiscountService>(CashDiscountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
