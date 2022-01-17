import { Module } from '@nestjs/common';
import { payrollNewsService } from './payroll-news.service';
import { PayrollNewsController } from './payroll-news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayrollNewsEntity } from './entities/payroll-news.entity';
import { PayrollNewsRepositoryService } from './payroll-news.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PayrollNewsEntity])],

  controllers: [PayrollNewsController],
  providers: [payrollNewsService,PayrollNewsRepositoryService],
  exports: [payrollNewsService,PayrollNewsRepositoryService],
})
export class PayrollNewsModule {}
