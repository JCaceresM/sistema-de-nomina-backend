import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SelectConditionType } from 'src/common/utils/responses/condition.helper';
import {  CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payrollt.dto';
import { PayrollRepositoryService } from './payroll.repository';
import { PayrollService } from './payroll.service';

@Controller('payroll')
export class payrollController {
  constructor(private readonly payrollRepositoryService: PayrollRepositoryService, private payrollService:PayrollService) {}

  @Post()
  create(@Body() createPayrollDto: CreatePayrollDto) {
    return this.payrollRepositoryService.create(createPayrollDto);
  }



  @Post('collection')
  findOne(@Body() body: {searchConditions:SelectConditionType[]}) {
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
