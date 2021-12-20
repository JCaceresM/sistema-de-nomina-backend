import { ApiProperty } from '@nestjs/swagger';
import { PaysheetEntity } from '../../paysheet/entities/paysheet.entity';

export class CreatePaymentNewsDto {
  @ApiProperty()
  amount: number;

  @ApiProperty()
  type: string;
  @ApiProperty()
  status: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  operation: string;

  @ApiProperty()
  nomina_id: string;

  @ApiProperty()
  update_at: Date;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  user_insert: string;

  @ApiProperty()
  paysheet_id: PaysheetEntity;
}
