import { ApiProperty } from '@nestjs/swagger';

export class CreateContactInfoDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  relation_id: string 

  @ApiProperty()
  owner_ref: string;

  @ApiProperty()
  tell: string;

  @ApiProperty()
  cell: string;

  @ApiProperty()
  fax: string;

  @ApiProperty()
  company_id: string;

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
  user_insert: string;
}
