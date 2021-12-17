import { ApiProperty } from '@nestjs/swagger';
import { DepartmentEntity } from '../../departments/entities/department.entity';

export class CreateCompanyDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  RNC: string;

  @ApiProperty()
  foundation_date: Date;

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
  departments: DepartmentEntity[];
}
