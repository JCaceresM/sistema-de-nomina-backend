import { ApiProperty } from '@nestjs/swagger';
import { PayrollNewsEntity } from '../../payroll-news/entities/payroll-news.entity';
import { PayrollRecordEntity } from '../../payroll-record/entities/payroll-record.entity';
import { BankAccountEntity } from '../../bank-accounts/entities/account.entity';
import { DepartmentEntity } from '../../departments/entities/department.entity';

export class CreatePayrollDto {
  @ApiProperty()
   id: number;


  @ApiProperty()
  company_id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  payroll_frequency: string;

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


  deparments: DepartmentEntity[];

 payroll_record: PayrollRecordEntity;
   
}
