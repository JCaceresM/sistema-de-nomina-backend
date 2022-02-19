import { Module } from '@nestjs/common';
import { payrollController } from './payroll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayrollRepositoryService } from './payroll.repository';
import { PayrollEntity } from './entities/payroll.entity';
import { PayrollService } from './payroll.service';

@Module({
  imports: [TypeOrmModule.forFeature([PayrollEntity])],
  controllers: [payrollController],
  providers: [PayrollService, PayrollRepositoryService],
  exports: [PayrollService, PayrollRepositoryService],
})
export class payrollModule {}
