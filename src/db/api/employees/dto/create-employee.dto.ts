import { ApiProperty } from '@nestjs/swagger';
import { ActivityEntity } from '../../activity/entities/activity.entity';
import { AddressEntity } from '../../address/entities/address.entity';
import { DepartmentEntity } from '../../departments/entities/department.entity';
import { PayrollEntity } from '../../payroll/entities/payroll.entity';
import { PositionEntity } from '../../positions/entities/position.entity';
import { RoleEntity } from '../../roles/entities/role.entity';

export class CreateEmployeeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  document_id: string;

  @ApiProperty()
  address: AddressEntity[];

  @ApiProperty()
  user_name: string;

  @ApiProperty()
  email_login: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  marital_status: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  born_date: Date;

  @ApiProperty()
  hire_date: Date;

  @ApiProperty()
  nss: string;

  @ApiProperty()
  department_id: DepartmentEntity;

  @ApiProperty()
  fax: string;

  @ApiProperty()
  tell: string;

  @ApiProperty()
  cell: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  company_id: number;

  @ApiProperty()
  full_name_emergency_contact: string;

  @ApiProperty()
  cell_emergency_contact: string;

  @ApiProperty()
  tell_emergency_contact: string;

  @ApiProperty()
  relation_emergency_contact: string;

  @ApiProperty()
  payment_method: string;

  @ApiProperty()
  blond_type: string;

  @ApiProperty()
  relinquishment: Date;

  @ApiProperty()
  relinquishment_detail: string;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  working_time: string;

  @ApiProperty()
  user_insert: string;

  @ApiProperty()
  roles: RoleEntity[];

  @ApiProperty()
  activities: ActivityEntity[];

  @ApiProperty()
  position_id: PositionEntity[];

  @ApiProperty()
  payroll_id: PayrollEntity;
}
