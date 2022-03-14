import { Module } from '@nestjs/common';
import { PayrollNewsService } from './payroll-news.service';
import { PayrollNewsController } from './payroll-news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayrollNewsEntity } from './entities/payroll-news.entity';
import { PayrollNewsRepositoryService } from './payroll-news.repository';
import { PayrollNewsRelationEntity } from '../payroll-news-relation/entities/payroll-news-relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PayrollNewsEntity, PayrollNewsRelationEntity])],

  controllers: [PayrollNewsController],
  providers: [PayrollNewsService,PayrollNewsRepositoryService],
  exports: [PayrollNewsService,PayrollNewsRepositoryService],
})
export class PayrollNewsModule {}
