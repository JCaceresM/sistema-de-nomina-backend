import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityEntity } from './entities/activity.entity';

@Injectable()
export class ActivityRepositoryService {
  constructor(
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
  ) {}
  create(createActivityDto: CreateActivityDto) {
    return this.activityRepository.save(createActivityDto);
  }

  findAll() {
    return this.activityRepository.find();
  }

  findOne(id: number) {
    return this.activityRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdateActivityDto) {
    const data = await this.activityRepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdateActivityDto> = { status: 'I' };

    const data = await this.activityRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
