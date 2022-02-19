import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PositionsService } from './positions.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { PositionsRepositoryService } from './positions.repository';

@Controller('positions')
export class PositionsController {
  constructor(
    private readonly positionsRepositoryService: PositionsRepositoryService,
  ) {}

  @Post()
  create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionsRepositoryService.create(createPositionDto);
  }

  @Get('all')
  findAll() {    
    return this.positionsRepositoryService.findAll();
  }
  @Get('department')
  findAllInDepartment(@Query('department_id') department_id: number) {    
    return this.positionsRepositoryService.findAllInDepartment(department_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionsRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePositionDto: UpdatePositionDto,
  ) {
    return this.positionsRepositoryService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionsRepositoryService.remove(+id);
  }
}
