import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayrollRecordDetailsService } from './payroll-record-details.service';
import { CreatePayrollRecordDetailDto } from './dto/create-payroll-record-detail.dto';
import { UpdatePayrollRecordDetailDto } from './dto/update-payroll-record-detail.dto';

@Controller('payroll-record-details')
export class PayrollRecordDetailsController {
  constructor(private readonly payrollRecordDetailsService: PayrollRecordDetailsService) {}

  @Post()
  create(@Body() createPayrollRecordDetailDto: CreatePayrollRecordDetailDto) {
    return this.payrollRecordDetailsService.create(createPayrollRecordDetailDto);
  }

  @Get()
  findAll() {
    return this.payrollRecordDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payrollRecordDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayrollRecordDetailDto: UpdatePayrollRecordDetailDto) {
    return this.payrollRecordDetailsService.update(+id, updatePayrollRecordDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollRecordDetailsService.remove(+id);
  }
}
