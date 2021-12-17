import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactInfoRepositoryService } from './contact-info.repository';
import { ContactInfoService } from './contact-info.service';
import { CreateContactInfoDto } from './dto/create-contact-info.dto';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';

@Controller('contact-info')
export class ContactInfoController {
  constructor(private readonly contactInfoRepositoryService: ContactInfoRepositoryService) {}

  @Post()
  create(@Body() createContactInfoDto: CreateContactInfoDto) {
    return this.contactInfoRepositoryService.create(createContactInfoDto);
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
  update(@Param('id') id: string, @Body() updateContactInfoDto: UpdateContactInfoDto) {
    return this.contactInfoRepositoryService.update(+id, updateContactInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactInfoRepositoryService.remove(+id);
  }
}
