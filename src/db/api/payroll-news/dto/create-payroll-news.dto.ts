import { ApiProperty } from '@nestjs/swagger';
import { PayrollEntity } from '../../payroll/entities/payroll.entity';

export class PayrollNewsDto {
  @ApiProperty()
 id: number;

  @ApiProperty()
 type: number;

 @ApiProperty()
 description: string;

 @ApiProperty()
 name: string;

 @ApiProperty()
 operation: number;

 @ApiProperty()
  amount: number;

 @ApiProperty()
  company_id: number;

 @ApiProperty()
  status: string;

 @ApiProperty()
  updated_at: Date;

 @ApiProperty()
  created_at: Date;

 @ApiProperty()
  user_update: string;

 @ApiProperty()
  user_insert: string;


 payroll_id: PayrollEntity;
}
