import { Test, TestingModule } from '@nestjs/testing';
import { PayrollRecordUsersRelationController } from './payroll-record-users-relation.controller';
import { PayrollRecordUsersRelationService } from './payroll-record-users-relation.service';

describe('PayrollRecordUsersRelationController', () => {
  let controller: PayrollRecordUsersRelationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayrollRecordUsersRelationController],
      providers: [PayrollRecordUsersRelationService],
    }).compile();

    controller = module.get<PayrollRecordUsersRelationController>(PayrollRecordUsersRelationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
