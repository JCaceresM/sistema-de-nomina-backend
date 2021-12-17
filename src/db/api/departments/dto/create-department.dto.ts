import { ApiProperty } from '@nestjs/swagger';
import { CompanyEntity } from '../../company/entities/company.entity';

export class CreateDepartmentDto {
  @ApiProperty()
  private id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  budget: number;

  @ApiProperty()
  company_id: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  update_at: Date;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  user_insert: string;

  @ApiProperty()
  company: CompanyEntity;
}
