import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatePaysheetDto } from './dto/create-paysheet.dto';
import { UpdatePaysheetDto } from './dto/update-paysheet.dto';
import { PaysheetRepositoryService } from './paysheet.repository';

@Controller('paysheet')
export class PaysheetController {
  constructor(private readonly paysheetRepositoryService: PaysheetRepositoryService) {}

  @Post()
  create(@Body() createPaysheetDto: CreatePaysheetDto) {
    return this.paysheetRepositoryService.create(createPaysheetDto);
  }

  @Get()
  findAll() {
    return this.paysheetRepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paysheetRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaysheetDto: UpdatePaysheetDto) {
    return this.paysheetRepositoryService.update(+id, updatePaysheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paysheetRepositoryService.remove(+id);
  }
}
