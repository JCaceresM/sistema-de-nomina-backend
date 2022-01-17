import { ApiProperty } from '@nestjs/swagger';
import { CompanyEntity } from '../../company/entities/company.entity';

export class CreateDepartmentDto {
  @ApiProperty()
  private id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  budget: number;

  @ApiProperty()
  company_id: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  user_insert: string;

  @ApiProperty()
  company: CompanyEntity;
}
