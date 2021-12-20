import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { DepartmentEntity } from '../departments/entities/department.entity';
import { CreatePaymentNewsDto } from './dto/create-payment-news.dto';
import { UpdatePaymentNewsDto } from './dto/update-payment-news.dto';
import { PaymentNewsEntity } from './entities/payment-news.entity';

@Injectable()
export class PaymentNewsRepositoryService {
  constructor(
    @InjectRepository(PaymentNewsEntity)
    private paymentNewsRepository: Repository<PaymentNewsEntity>,
  ) {}
  create(createPaymentNewDto: CreatePaymentNewsDto) {
    return this.paymentNewsRepository.save(createPaymentNewDto);
  }

  findAll() {
    return this.paymentNewsRepository.find();
  }

  findOne(id: number) {
    return this.paymentNewsRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdatePaymentNewsDto) {
    const data = await this.paymentNewsRepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdatePaymentNewsDto> = { status: 'I' };

    const data = await this.paymentNewsRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
