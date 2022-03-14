import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SelectConditionType } from 'src/common/utils/responses/condition.helper';
import { UpdateEmployeeDto } from '../employees/dto/update-employee.dto';
import { EmployeesService } from '../employees/employees.service';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payrollt.dto';
import { PayrollEntity } from './entities/payroll.entity';
import { PayrollRepositoryService } from './payroll.repository';
import { PayrollService } from './payroll.service';

@Controller('payroll')
export class payrollController {
  constructor(
    private readonly payrollRepositoryService: PayrollRepositoryService,
    private readonly employeeService: EmployeesService,
    private payrollService: PayrollService,
  ) {}

  @Post()
  create(@Body() createPayrollDto: CreatePayrollDto) {
    return this.payrollRepositoryService.create(createPayrollDto);
  }

  @Post('employees')
  async addEmployees(
    @Body()
    dataToUpdate: {
      payroll_id: number;
      patchData: Array<UpdateEmployeeDto>;
    },
  ) {
    return await Promise.all(
      dataToUpdate.patchData?.map(
        async (item) =>
          await this.employeeService.update(+item.id, {
            company_id: item.company_id,
            user_update: item.user_insert,
            payroll_id: dataToUpdate.payroll_id as unknown as PayrollEntity,
          }),
      ),
    );
  }

  @Post('collection')
  findOne(@Body() body: { searchConditions: SelectConditionType[] }) {
    return this.payrollService.find(body.searchConditions);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayrollDto: UpdatePayrollDto) {
    return this.payrollRepositoryService.update(+id, updatePayrollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollRepositoryService.remove(+id);
  }
}
