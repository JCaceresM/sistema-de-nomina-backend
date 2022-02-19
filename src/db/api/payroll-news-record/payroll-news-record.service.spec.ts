import { Test, TestingModule } from '@nestjs/testing';
import { PayrollNewsRecordService } from './payroll-news-record.service';

describe('PayrollNewsRecordService', () => {
  let service: PayrollNewsRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayrollNewsRecordService],
    }).compile();

    service = module.get<PayrollNewsRecordService>(PayrollNewsRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
