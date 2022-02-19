import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayrollNewsRelationService } from './payroll-news-relation.service';
import { CreatePayrollNewsRelationDto } from './dto/create-payroll-news-relation.dto';
import { UpdatePayrollNewsRelationDto } from './dto/update-payroll-news-relation.dto';

@Controller('payroll-news-relation')
export class PayrollNewsRelationController {
  constructor(private readonly payrollNewsRelationService: PayrollNewsRelationService) {}

  @Post()
  create(@Body() createPayrollNewsRelationDto: CreatePayrollNewsRelationDto) {
    return this.payrollNewsRelationService.create(createPayrollNewsRelationDto);
  }

  @Get()
  findAll() {
    return this.payrollNewsRelationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payrollNewsRelationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayrollNewsRelationDto: UpdatePayrollNewsRelationDto) {
    return this.payrollNewsRelationService.update(+id, updatePayrollNewsRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollNewsRelationService.remove(+id);
  }
}
