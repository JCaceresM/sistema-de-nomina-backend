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
import { QueryParams } from 'src/common/types/response.type';
import { SelectConditionType } from 'src/common/utils/responses/condition.helper';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesRepositoryService } from './employees.repository';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly employeesRepositoryService: EmployeesRepositoryService,
    private readonly employeesService: EmployeesService,
  ) {}

  @Post()
  create(@Body() record: CreateEmployeeDto & CreateAddressDto) {
    return this.employeesService.createEmployee(record);
  }
  @Post('law-bonus')
  employeesLawBonus(@Body() record: {conditions: SelectConditionType[], queryParams:QueryParams}) {
    return this.employeesService.employeesLawBonus(record.conditions, record.queryParams);
  }

  @Post('collection')
  async findAll(@Query('take') take: number, @Query('skip') skip: number, @Body() params: {searchConditions:SelectConditionType[]}) { 
       
    return this.employeesService.find(params.searchConditions,{page:skip,size:take});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesRepositoryService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesRepositoryService.remove(+id);
  }
}
