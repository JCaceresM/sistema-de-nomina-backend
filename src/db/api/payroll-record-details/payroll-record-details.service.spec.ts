import { Test, TestingModule } from '@nestjs/testing';
import { PayrollRecordDetailsService } from './payroll-record-details.service';

describe('PayrollRecordDetailsService', () => {
  let service: PayrollRecordDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayrollRecordDetailsService],
    }).compile();

    service = module.get<PayrollRecordDetailsService>(PayrollRecordDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
