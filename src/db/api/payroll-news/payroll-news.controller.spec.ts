import { Test, TestingModule } from '@nestjs/testing';
import { PayrollNewsController } from './payroll-news.controller';
import { PayrollNewsService } from './payroll-news.service';

describe('CashDiscountController', () => {
  let controller: PayrollNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrollNewsController],
      providers: [PayrollNewsService],
    }).compile();

    controller = module.get<PayrollNewsController>(PayrollNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
