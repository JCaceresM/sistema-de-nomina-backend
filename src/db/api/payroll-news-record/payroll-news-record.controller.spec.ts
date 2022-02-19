import { Test, TestingModule } from '@nestjs/testing';
import { PayrollNewsRecordController } from './payroll-news-record.controller';
import { PayrollNewsRecordService } from './payroll-news-record.service';

describe('PayrollNewsRecordController', () => {
  let controller: PayrollNewsRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrollNewsRecordController],
      providers: [PayrollNewsRecordService],
    }).compile();

    controller = module.get<PayrollNewsRecordController>(PayrollNewsRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
