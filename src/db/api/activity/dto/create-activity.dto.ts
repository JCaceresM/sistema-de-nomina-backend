import { ApiProperty } from '@nestjs/swagger';
import { EmployeeEntity } from '../../employees/entities/employee.entity';

export class CreateActivityDto {
  @ApiProperty()
 id: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  route: string;

  @ApiProperty()
  parent: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  user_update: string;

  employee_id: EmployeeEntity;
}
