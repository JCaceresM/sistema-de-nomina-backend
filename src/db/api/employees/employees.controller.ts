import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesRepositoryService } from './employees.repository';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly employeesRepositoryService: EmployeesRepositoryService,
  ) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesRepositoryService.create(createEmployeeDto);
  }

  @Get('all')
  async findAll(@Param('take') take: number,@Param('skip') skip: number) {
    // console.log( this.employeesRepositoryService.findAll({take,skip}));
    
    return this.employeesRepositoryService.findAll({page:take,size:skip});
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
