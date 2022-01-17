import { Test, TestingModule } from '@nestjs/testing';
import { payrollService } from './payroll.service';

describe('payrollService', () => {
  let service: payrollService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [payrollService],
    }).compile();

    service = module.get<payrollService>(payrollService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
