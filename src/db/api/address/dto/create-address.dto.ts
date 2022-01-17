import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
 id: number;

  @ApiProperty()
  street: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  postal_code: string;

  @ApiProperty()
  province: string;

  @ApiProperty()
  owner_ref: string;

  @ApiProperty()
  region: string;

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
}
