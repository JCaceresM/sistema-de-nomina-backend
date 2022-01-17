import { Module } from '@nestjs/common';
import { PayrollRecordService } from './payroll-record.service';
import { PayrollRecordController } from './payroll-record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayrollRecordEntity } from './entities/payroll-record.entity';
import { PayrollRecordRepositoryService } from './payroll-record.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PayrollRecordEntity])],
  controllers: [PayrollRecordController],
  providers: [PayrollRecordService, PayrollRecordRepositoryService],
  exports: [PayrollRecordService, PayrollRecordRepositoryService],
})
export class PayrollRecordModule {}
