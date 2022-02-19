import { Test, TestingModule } from '@nestjs/testing';
import { PayrollRecordUsersRelationService } from './payroll-record-users-relation.service';

describe('PayrollRecordUsersRelationService', () => {
  let service: PayrollRecordUsersRelationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayrollRecordUsersRelationService],
    }).compile();

    service = module.get<PayrollRecordUsersRelationService>(PayrollRecordUsersRelationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
