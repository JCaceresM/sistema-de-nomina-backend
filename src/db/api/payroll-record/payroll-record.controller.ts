import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayrollRecordService } from './payroll-record.service';
import { CreatePayrollRecordDto } from './dto/create-payroll-record.dto';
import { UpdatePayrollRecordDto } from './dto/update-payroll-record.dto';
import { PayrollRecordRepositoryService } from './payroll-record.repository';

@Controller('payroll-record')
export class PayrollRecordController {
  constructor(private readonly payrollRecordRepositoryService: PayrollRecordRepositoryService) {}

  @Post()
  create(@Body() createPayrollRecordDto: CreatePayrollRecordDto) {
    return this.payrollRecordRepositoryService.create(createPayrollRecordDto);
  }

  @Get()
  findAll() {
    return this.payrollRecordRepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payrollRecordRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayrollRecordDto: UpdatePayrollRecordDto) {
    return this.payrollRecordRepositoryService.update(+id, updatePayrollRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollRecordRepositoryService.remove(+id);
  }
}
