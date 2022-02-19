import { Module } from '@nestjs/common';
import { PayrollNewsRecordService } from './payroll-news-record.service';
import { PayrollNewsRecordController } from './payroll-news-record.controller';

@Module({
  controllers: [PayrollNewsRecordController],
  providers: [PayrollNewsRecordService]
})
export class PayrollNewsRecordModule {}
