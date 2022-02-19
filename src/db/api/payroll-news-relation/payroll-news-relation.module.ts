import { Module } from '@nestjs/common';
import { PayrollNewsRelationService } from './payroll-news-relation.service';
import { PayrollNewsRelationController } from './payroll-news-relation.controller';

@Module({
  controllers: [PayrollNewsRelationController],
  providers: [PayrollNewsRelationService]
})
export class PayrollNewsRelationModule {}
