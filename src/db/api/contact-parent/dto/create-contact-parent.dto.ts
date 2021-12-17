import { ApiProperty } from '@nestjs/swagger';
import { EmployeeEntity } from '../../employees/entities/employee.entity';

export class CreateContactParentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  fist_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  parent_type: string;

  @ApiProperty()
  cell: string;

  @ApiProperty()
  tell: string;

  @ApiProperty()
  company_id: number;

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
  user_insert: string;

  @ApiProperty()
  employee_id: EmployeeEntity;
}
