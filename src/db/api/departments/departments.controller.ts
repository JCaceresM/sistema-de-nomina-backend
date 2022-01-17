import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentRepositoryService } from './departments.repository';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsRepository: DepartmentRepositoryService) {}

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsRepository.create(createDepartmentDto);
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
