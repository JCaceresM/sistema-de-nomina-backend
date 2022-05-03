import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SelectConditionType } from 'src/common/utils/responses/condition.helper';
import { DepartmentRepositoryService } from './departments.repository';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsRepository: DepartmentRepositoryService, private readonly departmentsService: DepartmentsService) {}

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsRepository.create(createDepartmentDto);
  }
  @Post('employees')
  async employees(
    @Param('take') take: number,
    @Param('skip') skip: number,
    @Body() params: { searchConditions: SelectConditionType[] },
  ) {
    return this.departmentsService.find(
      params.searchConditions,
      { page: take, size: skip },
    );
  }                                                                                  
  @Get('all')
  findAll() {
    return this.departmentsRepository.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsRepository.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsRepository.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsRepository.remove(+id);
  }
}
