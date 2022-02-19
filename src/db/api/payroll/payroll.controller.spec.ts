import { Test, TestingModule } from '@nestjs/testing';
import { payrollController } from './payroll.controller';
import { PayrollService } from './payroll.service';

describe('payrollController', () => {
  let controller: payrollController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [payrollController],
      providers: [PayrollService],
    }).compile();

    controller = module.get<payrollController>(payrollController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
