import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepositoryService } from './users.repository';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServiceRepository: UsersRepositoryService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersServiceRepository.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersServiceRepository.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersServiceRepository.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersServiceRepository.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersServiceRepository.remove(+id);
  }
}
