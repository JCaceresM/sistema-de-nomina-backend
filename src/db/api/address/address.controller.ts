import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressRepositoryService } from './address.repository';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressRepositoryService: AddressRepositoryService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressRepositoryService.create(createAddressDto);
  }

  @Get()
  findAll() {
    return this.addressRepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressRepositoryService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressRepositoryService.remove(+id);
  }
}
