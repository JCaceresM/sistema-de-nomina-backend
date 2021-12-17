import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentEntity } from './entities/department.entity';

@Injectable()
export class DepartmentRepositoryService {
  constructor(
    @InjectRepository(DepartmentEntity)
    private departmentRepository: Repository<DepartmentEntity>,
  ) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentRepository.save(createDepartmentDto);
  }

  findAll() {
    return this.departmentRepository.find();
  }

  findOne(id: number) {
    return this.departmentRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdateDepartmentDto) {
    const data = await this.departmentRepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdateDepartmentDto> = { status: 'I' };

    const data = await this.departmentRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
