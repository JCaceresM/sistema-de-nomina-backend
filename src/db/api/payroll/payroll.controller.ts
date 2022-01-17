import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {  CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payrollt.dto';
import { PayrollRepositoryService } from './payroll.repository';

@Controller('payroll')
export class payrollController {
  constructor(private readonly payrollRepositoryService: PayrollRepositoryService) {}

  @Post()
  create(@Body() createPayrollDto: CreatePayrollDto) {
    return this.payrollRepositoryService.create(createPayrollDto);
  }

  @Get()
  findAll() {
    return this.payrollRepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payrollRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatepayrollDto: UpdatePayrollDto) {
    return this.payrollRepositoryService.update(+id, updatepayrollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollRepositoryService.remove(+id);
  }
}
