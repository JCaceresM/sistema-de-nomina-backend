import { ApiProperty } from "@nestjs/swagger";
import { EmployeeEntity } from "../../employees/entities/employee.entity";

export class CreateActivityDto {
    @ApiProperty()
     id: string;
  
    @ApiProperty()
     description: string;
  
    @ApiProperty()
     parent: string;

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
    
    employee_id: EmployeeEntity;
}
