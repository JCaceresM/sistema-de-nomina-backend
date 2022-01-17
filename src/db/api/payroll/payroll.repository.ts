import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payrollt.dto';
import { PayrollEntity } from './entities/payroll.entity';

@Injectable()
export class PayrollRepositoryService {
  constructor(
    @InjectRepository(PayrollEntity)
    private payrollRepository: Repository<PayrollEntity>,
  ) {}
  create(createPayrollDto: CreatePayrollDto) {
    return this.payrollRepository.save(createPayrollDto);
  }

  findAll() {
    return this.payrollRepository.find();
  }

  findOne(id: number) {
    return this.payrollRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdatePayrollDto) {
    const data = await this.payrollRepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdatePayrollDto> = { status: 'I' };

    const data = await this.payrollRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
