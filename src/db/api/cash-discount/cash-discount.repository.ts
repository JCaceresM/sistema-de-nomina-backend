import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { AddressEntity } from '../address/entities/address.entity';
import { CreateCashDiscountDto } from './dto/create-cash-discount.dto';
import { UpdateCashDiscountDto } from './dto/update-cash-discount.dto';
import { CashDiscountEntity } from './entities/cash-discount.entity';

@Injectable()
export class CashDiscountRepositoryService {
  constructor(
    @InjectRepository(CashDiscountEntity)
    private cashDiscountRepository: Repository<CashDiscountEntity>,
  ) {}
  create(createCashDiscountDto: CreateCashDiscountDto) {
    return this.cashDiscountRepository.save(createCashDiscountDto);
  }

  findAll() {
    return this.cashDiscountRepository.find();
  }

  findOne(id: number) {
    return this.cashDiscountRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdateCashDiscountDto) {
    const data = await this.cashDiscountRepository.update(
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
    const dataToUpdate: Partial<UpdateCashDiscountDto> = { status: 'I' };

    const data = await this.cashDiscountRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
