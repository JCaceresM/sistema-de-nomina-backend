import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityRepositoryService } from './activity.repository';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityRepositoryService: ActivityRepositoryService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityRepositoryService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activityRepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activityRepositoryService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityRepositoryService.remove(+id);
  }
}
