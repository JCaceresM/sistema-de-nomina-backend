import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { createQueryBuilder, Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeEntity } from './entities/employee.entity';
import { Not } from 'typeorm';
import { PaginationType } from 'src/common/types/general';
import { paginatedQuery } from 'src/common/utils/responses/pagination';
import { QueryParams } from 'src/common/types/response.type';

@Injectable()
export class EmployeesRepositoryService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeesRepository: Repository<EmployeeEntity>,
  ) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeesRepository.save(createEmployeeDto);
  }

  async findAll(queryParams: QueryParams) {
    const statement = `
      SELECT * FROM employee  WHERE status != 'I'
 `;
    const [data, meta] = await paginatedQuery(statement, queryParams);
    return { data, meta };
  }

  findOne(id: number) {
    return this.employeesRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const data = await this.employeesRepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdateEmployeeDto> = { status: 'I' };

    const data = await this.employeesRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
