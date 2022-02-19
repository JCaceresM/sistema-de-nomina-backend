import { Test, TestingModule } from '@nestjs/testing';
import { PayrollRecordDetailsController } from './payroll-record-details.controller';
import { PayrollRecordDetailsService } from './payroll-record-details.service';

describe('PayrollRecordDetailsController', () => {
  let controller: PayrollRecordDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrollRecordDetailsController],
      providers: [PayrollRecordDetailsService],
    }).compile();

    controller = module.get<PayrollRecordDetailsController>(PayrollRecordDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
