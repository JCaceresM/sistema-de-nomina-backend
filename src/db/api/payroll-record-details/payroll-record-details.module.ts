import { Module } from '@nestjs/common';
import { PayrollRecordDetailsService } from './payroll-record-details.service';
import { PayrollRecordDetailsController } from './payroll-record-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayrollRecordDetailEntity } from './entities/payroll-record-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PayrollRecordDetailEntity])],

  controllers: [PayrollRecordDetailsController],
  providers: [PayrollRecordDetailsService]
})
export class PayrollRecordDetailsModule {}
