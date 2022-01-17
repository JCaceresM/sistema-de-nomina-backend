import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { CreatePayrollRecordDto } from './dto/create-payroll-record.dto';
import { UpdatePayrollRecordDto } from './dto/update-payroll-record.dto';
import { PayrollRecordEntity } from './entities/payroll-record.entity';


@Injectable()
export class PayrollRecordRepositoryService {
  constructor(
    @InjectRepository(PayrollRecordEntity)
    private payrollRepository: Repository<PayrollRecordEntity>,
  ) {}
  create(createPayrollRecordDto: CreatePayrollRecordDto) {
    return this.payrollRepository.save(createPayrollRecordDto);
  }

  findAll() {
    return this.payrollRepository.find();
  }

  findOne(id: number) {
    return this.payrollRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdatePayrollRecordDto) {
    const data = await this.payrollRepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdatePayrollRecordDto> = { status: 'I' };

    const data = await this.payrollRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
