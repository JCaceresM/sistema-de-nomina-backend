import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayrollNewsRepositoryService } from './payroll-news.repository';
import { payrollNewsService } from './payroll-news.service';
import { PayrollNewsDiscountDto } from './dto/create-payroll-news.dto';
import { UpdatePayrollNewsDiscountDto } from './dto/update-payroll-news.dto';
import { SelectConditionType } from 'src/common/utils/responses/condition.helper';

@Controller('cash-discount')
export class PayrollNewsController {
  constructor(private readonly PayrollNewsRepositoryService: PayrollNewsRepositoryService) {}

  @Post()
  create(@Body() createCashDiscountDto: PayrollNewsDiscountDto) {
    return this.PayrollNewsRepositoryService.create(createCashDiscountDto);
  }

  @Post('collection')
  async findAll(@Param('take') take: number,@Param('skip') skip: number, @Body() body: {searchConditions:SelectConditionType[]}) {    
    return this.PayrollNewsRepositoryService.find(body.searchConditions,{page:take,size:skip});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PayrollNewsRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCashDiscountDto: UpdatePayrollNewsDiscountDto) {
    return this.PayrollNewsRepositoryService.update(+id, updateCashDiscountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PayrollNewsRepositoryService.remove(+id);
  }
}
