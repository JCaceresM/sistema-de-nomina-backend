import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayrollRecordUsersRelationService } from './payroll-record-users-relation.service';
import { CreatePayrollRecordUsersRelationDto } from './dto/create-payroll-record-users-relation.dto';
import { UpdatePayrollRecordUsersRelationDto } from './dto/update-payroll-record-users-relation.dto';

@Controller('payroll-record-users-relation')
export class PayrollRecordUsersRelationController {
  constructor(private readonly payrollRecordUsersRelationService: PayrollRecordUsersRelationService) {}

  @Post()
  create(@Body() createPayrollRecordUsersRelationDto: CreatePayrollRecordUsersRelationDto) {
    return this.payrollRecordUsersRelationService.create(createPayrollRecordUsersRelationDto);
  }

  @Get()
  findAll() {
    return this.payrollRecordUsersRelationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payrollRecordUsersRelationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayrollRecordUsersRelationDto: UpdatePayrollRecordUsersRelationDto) {
    return this.payrollRecordUsersRelationService.update(+id, updatePayrollRecordUsersRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollRecordUsersRelationService.remove(+id);
  }
}
