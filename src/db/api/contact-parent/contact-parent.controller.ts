import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactParentRepositoryService } from './contact-parent.repository';
import { ContactParentService } from './contact-parent.service';
import { CreateContactParentDto } from './dto/create-contact-parent.dto';
import { UpdateContactParentDto } from './dto/update-contact-parent.dto';

@Controller('contact-parent')
export class ContactParentController {
  constructor(private readonly contactParentRepositoryService: ContactParentRepositoryService) {}

  @Post()
  create(@Body() createContactParentDto: CreateContactParentDto) {
    return this.contactParentRepositoryService.create(createContactParentDto);
  }

  @Get()
  findAll() {
    return this.contactParentRepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactParentRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactParentDto: UpdateContactParentDto) {
    return this.contactParentRepositoryService.update(+id, updateContactParentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactParentRepositoryService.remove(+id);
  }
}
