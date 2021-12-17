import { ApiProperty } from '@nestjs/swagger';
import { JoinTable, ManyToMany } from 'typeorm';
import { ActivityEntity } from '../../activity/entities/activity.entity';
import { DepartmentEntity } from '../../departments/entities/department.entity';
import { PaysheetEntity } from '../../paysheet/entities/paysheet.entity';
import { RoleEntity } from '../../roles/entities/role.entity';

export class CreateEmployeeDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  document_id: string;

  @ApiProperty()
  user_name: string;

  @ApiProperty()
  email_login: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  fist_name: string;

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
  roles: RoleEntity[];
  
  @ApiProperty()
  activities: ActivityEntity[];

  @ApiProperty()
    paysheet_id: PaysheetEntity; 
}
