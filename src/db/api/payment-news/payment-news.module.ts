import { Module } from '@nestjs/common';
import { PaymentNewsService } from './payment-news.service';
import { PaymentNewsController } from './payment-news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentNewsRepositoryService } from './payment-news.repository';
import { PaymentNewsEntity } from './entities/payment-news.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentNewsEntity])],
  controllers: [PaymentNewsController],
  providers: [PaymentNewsService,PaymentNewsRepositoryService],
  exports: [PaymentNewsService,PaymentNewsRepositoryService],
})
export class PaymentNewsModule {}
