import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty()
  private id: number;

  @ApiProperty()
  rol_name: string;

  @ApiProperty()
  type: string;

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
}
