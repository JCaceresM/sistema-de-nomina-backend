import { ApiProperty } from '@nestjs/swagger';
import { DepartmentEntity } from '../../departments/entities/department.entity';

export class CreateCompanyDto {
  @ApiProperty()
 id: number;

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
  updated_at: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  departments: DepartmentEntity[];
}
