import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayrollNewsRecordService } from './payroll-news-record.service';
import { CreatePayrollNewsRecordDto } from './dto/create-payroll-news-record.dto';
import { UpdatePayrollNewsRecordDto } from './dto/update-payroll-news-record.dto';

@Controller('payroll-news-record')
export class PayrollNewsRecordController {
  constructor(private readonly payrollNewsRecordService: PayrollNewsRecordService) {}

  @Post()
  create(@Body() createPayrollNewsRecordDto: CreatePayrollNewsRecordDto) {
    return this.payrollNewsRecordService.create(createPayrollNewsRecordDto);
  }

  @Post('collection')
  find(@Body() params) {
    return this.payrollNewsRecordService.find(params.searchConditions);
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayrollNewsRecordDto: UpdatePayrollNewsRecordDto) {
    return this.payrollNewsRecordService.update(+id, updatePayrollNewsRecordDto);
  }
 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollNewsRecordService.remove(+id);
  }
}
