import { ApiProperty } from '@nestjs/swagger';

export class CreateBankAccountRecordDto {
  @ApiProperty()
  payroll_record_id: number;

  @ApiProperty()
  bank_account_id: number;

  @ApiProperty()
  type: string;
  
  @ApiProperty()
  id: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  user_update: string;
  
  @ApiProperty()
  description: string;

  @ApiProperty()
  user_insert: string;
  @ApiProperty()
  status: string;

  @ApiProperty()
  transaction_type: string;
}
