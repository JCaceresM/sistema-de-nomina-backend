import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty()
  private id: string;

  @ApiProperty()
  rol_name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  company_id: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  update_at: Date;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  user_insert: string;
}
