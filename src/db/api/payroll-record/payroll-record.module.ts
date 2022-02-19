import { Module } from '@nestjs/common';
import { PayrollRecordService } from './payroll-record.service';
import { PayrollRecordController } from './payroll-record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayrollRecordEntity } from './entities/payroll-record.entity';
import { PayrollRecordRepositoryService } from './payroll-record.repository';
import { PayrollNewsRecord } from '../payroll-news-record/entities/payroll-news-record.entity';
import { PayrollRecordUsersRelationEntity } from '../payroll-record-users-relation/entities/payroll-record-users-relation.entity';
import { PayrollRecordDetailEntity } from '../payroll-record-details/entities/payroll-record-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PayrollRecordEntity,PayrollNewsRecord,PayrollRecordUsersRelationEntity,PayrollRecordDetailEntity])],
  controllers: [PayrollRecordController],
  providers: [PayrollRecordService, PayrollRecordRepositoryService],
  exports: [PayrollRecordService, PayrollRecordRepositoryService],
})
export class PayrollRecordModule {}
