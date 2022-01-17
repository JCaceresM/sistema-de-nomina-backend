import { ApiProperty } from "@nestjs/swagger";
import { EmployeeEntity } from "../../employees/entities/employee.entity";
import { PayrollEntity } from "../../payroll/entities/payroll.entity";

export class CreatePayrollRecordDto {
    @ApiProperty()
    id: number;
  
    employee_id: EmployeeEntity[];
    
    payroll_id: PayrollEntity;
  
    @ApiProperty()
    status: string;
  
    @ApiProperty()
    voucher: number;
  
    @ApiProperty()
    company_id: number;
  
    @ApiProperty()
    updated_at: Date;
  
    @ApiProperty()
    created_at: Date;
  
    @ApiProperty()
    user_update: string;
  
    @ApiProperty()
    user_insert: string;
}
