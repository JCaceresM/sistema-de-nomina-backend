import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesRepositoryService } from './roles.repository';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesRepositoryService: RolesRepositoryService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesRepositoryService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.rolesRepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesRepositoryService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesRepositoryService.remove(+id);
  }
}
