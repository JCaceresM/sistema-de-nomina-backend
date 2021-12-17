import { ApiProperty } from '@nestjs/swagger';
import { PaysheetEntity } from '../../paysheet/entities/paysheet.entity';

export class CreateCashDiscountDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  amount: string;

  @ApiProperty()
  company_id: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  update_at: Date;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  paysheet_id: PaysheetEntity;
}
