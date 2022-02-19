import { Module } from '@nestjs/common';
import { PayrollRecordDetailsService } from './payroll-record-details.service';
import { PayrollRecordDetailsController } from './payroll-record-details.controller';

@Module({
  controllers: [PayrollRecordDetailsController],
  providers: [PayrollRecordDetailsService]
})
export class PayrollRecordDetailsModule {}
