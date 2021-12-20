import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from '../../roles/entities/role.entity';

export class CreateUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  user_name: string;

  @ApiProperty()
  email_login: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  update_at: Date;

  @ApiProperty()
  employee_id: string;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  user_update: string;

  @ApiProperty()
  roles: RoleEntity[];

  @ApiProperty()
  user_insert: string;

  @ApiProperty()
  status: string;
}
