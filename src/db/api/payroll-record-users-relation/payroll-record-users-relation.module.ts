import { Module } from '@nestjs/common';
import { PayrollRecordUsersRelationService } from './payroll-record-users-relation.service';
import { PayrollRecordUsersRelationController } from './payroll-record-users-relation.controller';

@Module({
  controllers: [PayrollRecordUsersRelationController],
  providers: [PayrollRecordUsersRelationService]
})
export class PayrollRecordUsersRelationModule {}
