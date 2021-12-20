import { Module } from '@nestjs/common';
import { CashDiscountService } from './cash-discount.service';
import { CashDiscountController } from './cash-discount.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashDiscountEntity } from './entities/cash-discount.entity';
import { CashDiscountRepositoryService } from './cash-discount.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CashDiscountEntity])],

  controllers: [CashDiscountController],
  providers: [CashDiscountService,CashDiscountRepositoryService],
  exports: [CashDiscountService,CashDiscountRepositoryService],
})
export class CashDiscountModule {}
