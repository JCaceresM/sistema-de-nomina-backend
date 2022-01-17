import { ApiProperty } from "@nestjs/swagger";
import { DepartmentEntity } from "../../departments/entities/department.entity";
import { EmployeeEntity } from "../../employees/entities/employee.entity";

export class CreatePositionDto {
    @ApiProperty()
        id: number;
  
    employee_id: EmployeeEntity[];
  
   
    department_id: DepartmentEntity;
  
    @ApiProperty()
     status: string;

    @ApiProperty()
     description: string;
    
    @ApiProperty()
     company_id: string;
  
    @ApiProperty()
     name: string;
  
    @ApiProperty()
     max_salary: number;
  
    @ApiProperty()
     min_salary: number;
  
    @ApiProperty()
     updated_at: Date;
  
    @ApiProperty()
     created_at: Date;
  
    @ApiProperty()
     user_update: string;
  
    @ApiProperty()
     user_insert: string;
}
