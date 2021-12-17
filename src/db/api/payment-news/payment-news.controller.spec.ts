import { Test, TestingModule } from '@nestjs/testing';
import { PaymentNewsController } from './payment-news.controller';
import { PaymentNewsService } from './payment-news.service';

describe('PaymentNewsController', () => {
  let controller: PaymentNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentNewsController],
      providers: [PaymentNewsService],
    }).compile();

    controller = module.get<PaymentNewsController>(PaymentNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
