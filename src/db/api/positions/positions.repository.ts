import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Not, Repository } from 'typeorm';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { PositionEntity } from './entities/position.entity';


@Injectable()
export class PositionsRepositoryService {
  constructor(
    @InjectRepository(PositionEntity)
    private positionsRepository: Repository<PositionEntity>,
  ) {}
  create(createPositionDto: CreatePositionDto) {
    return this.positionsRepository.save(createPositionDto);
  }

  findAll() {
    return this.positionsRepository.find({ where:{status:Not("I"), }});
  }
  findAllInDepartment(department_id:number) {
    return this.positionsRepository.find({ where:{status:Not("I"),department_id }});
  }

  findOne(id: number) {
    return this.positionsRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdatePositionDto) {
    const data = await this.positionsRepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdatePositionDto> = { status: 'I' };

    const data = await this.positionsRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
