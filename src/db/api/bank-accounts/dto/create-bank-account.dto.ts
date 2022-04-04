import { ApiProperty } from '@nestjs/swagger';

export class CreateBankAccountDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  description: string;
  
  @ApiProperty()
  name: string;

  @ApiProperty()
  balance: number;
  
  @ApiProperty()
  type: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  company_id: number;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  user_insert: string;
}
