import { Test, TestingModule } from '@nestjs/testing';
import { PayrollNewsController } from './payroll-news.controller';
import { payrollNewsService } from './payroll-news.service';

describe('CashDiscountController', () => {
  let controller: PayrollNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrollNewsController],
      providers: [payrollNewsService],
    }).compile();

    controller = module.get<PayrollNewsController>(PayrollNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
