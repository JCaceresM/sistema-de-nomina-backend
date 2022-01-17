import { Test, TestingModule } from '@nestjs/testing';
import { PayrollRecordController } from './payroll-record.controller';
import { PayrollRecordService } from './payroll-record.service';

describe('PayrollRecordController', () => {
  let controller: PayrollRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrollRecordController],
      providers: [PayrollRecordService],
    }).compile();

    controller = module.get<PayrollRecordController>(PayrollRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
