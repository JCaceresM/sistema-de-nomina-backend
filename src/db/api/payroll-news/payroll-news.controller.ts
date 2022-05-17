import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PayrollNewsRepositoryService } from './payroll-news.repository';
import { PayrollNewsService } from './payroll-news.service';
import { PayrollNewsDto } from './dto/create-payroll-news.dto';
import { UpdatePayrollNewsDto } from './dto/update-payroll-news.dto';
import { SelectConditionType } from 'src/common/utils/responses/condition.helper';

@Controller('cash-discount')
export class PayrollNewsController {
  constructor(
    private readonly PayrollNewsRepositoryService: PayrollNewsRepositoryService,
    private payrollNewsService: PayrollNewsService,
  ) {}

  @Post()
  create(@Body() createCashDiscountDto: PayrollNewsDto) {
    return this.PayrollNewsRepositoryService.create(createCashDiscountDto);
  }

  @Post('collection')
  async findAll(
    @Param('take') take: number,
    @Param('skip') skip: number,
    @Body() body: { searchConditions: SelectConditionType[] },
  ) {
    return this.PayrollNewsRepositoryService.find(body.searchConditions, {
      page: take,
      size: skip,
    });
  }
  @Post('employees-payrollnews')
  async addNewsToEmployee(
    @Body() body: { employee_id: number; payrollNewsDto: PayrollNewsDto },
  ) {
    return this.payrollNewsService.addPayrollNews(
      body.employee_id,
      body.payrollNewsDto,
    );
  }
  @Post('employees-payrollnews/collection')
  async getEmployeeNews(
    @Body() body: { id: number; searchConditions: SelectConditionType[] },
  ) {
    return await this.payrollNewsService.getEmployeeNews(
      +body.id,
      body.searchConditions,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PayrollNewsRepositoryService.findOne(+id);
  }


  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCashDiscountDto: UpdatePayrollNewsDto,
  ) {    
    return this.PayrollNewsRepositoryService.update(+id, updateCashDiscountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PayrollNewsRepositoryService.remove(+id);
  }
}
