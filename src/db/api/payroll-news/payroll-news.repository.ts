import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { AddressEntity } from '../address/entities/address.entity';
import { PayrollNewsDiscountDto } from './dto/create-payroll-news.dto';
import { UpdatePayrollNewsDiscountDto } from './dto/update-payroll-news.dto';
import { PayrollNewsEntity } from './entities/payroll-news.entity';

@Injectable()
export class PayrollNewsRepositoryService {
  constructor(
    @InjectRepository(PayrollNewsEntity)
    private PayrollNewsRepository: Repository<PayrollNewsEntity>,
  ) {}
  create(payrollNewsDiscountDto: PayrollNewsDiscountDto) {
    return this.PayrollNewsRepository.save(payrollNewsDiscountDto);
  }

  findAll() {
    return this.PayrollNewsRepository.find();
  }

  findOne(id: number) {
    return this.PayrollNewsRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdatePayrollNewsDiscountDto) {
    const data = await this.PayrollNewsRepository.update(
      id,
      updateEmployeeDto,
    );
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdatePayrollNewsDiscountDto> = { status: 'I' };

    const data = await this.PayrollNewsRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
