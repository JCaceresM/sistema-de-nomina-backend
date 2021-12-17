import { ApiProperty } from '@nestjs/swagger';
import { CashDiscountEntity } from '../../cash-discount/entities/cash-discount.entity';
import { PaymentNewsEntity } from '../../payment-news/entities/payment-news.entity';

export class CreatePaysheetDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  salary: number;

  @ApiProperty()
  dep_id: number;

  @ApiProperty()
  company_id: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  update_at: Date;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  user_insert: string;

  @ApiProperty()
   payment_news: PaymentNewsEntity[];

  @ApiProperty()
   cash_discountEntity: CashDiscountEntity[];
}
