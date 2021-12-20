import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyRepositoryService } from './company.repository';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly contactInfoRepositoryService: CompanyRepositoryService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.contactInfoRepositoryService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.contactInfoRepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactInfoRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.contactInfoRepositoryService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactInfoRepositoryService.remove(+id);
  }
}
