import { Test, TestingModule } from '@nestjs/testing';
import { PaymentNewsService } from './payment-news.service';

describe('PaymentNewsService', () => {
  let service: PaymentNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentNewsService],
    }).compile();

    service = module.get<PaymentNewsService>(PaymentNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
