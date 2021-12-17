import { Test, TestingModule } from '@nestjs/testing';
import { CashDiscountController } from './cash-discount.controller';
import { CashDiscountService } from './cash-discount.service';

describe('CashDiscountController', () => {
  let controller: CashDiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashDiscountController],
      providers: [CashDiscountService],
    }).compile();

    controller = module.get<CashDiscountController>(CashDiscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
