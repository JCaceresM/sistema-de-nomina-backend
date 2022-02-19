import { ApiProperty } from '@nestjs/swagger';
import { EmployeeEntity } from '../../employees/entities/employee.entity';

export class CreateAddressDto {
  @ApiProperty()
 id?: number;

  @ApiProperty()
  street: string;

  @ApiProperty()
  employee_id: number;

  @ApiProperty()
  province: number;

  @ApiProperty()
  municipality: number;

  @ApiProperty()
  sector: number;

  @ApiProperty()
  status: string;


  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  user_update: string;
}
