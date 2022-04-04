import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { CreateBankAccountRecordDto } from './dto/create-bank-account-record.dto';
import { UpdateBankAccountRecordDto } from '../bank-accounts/dto/update-bank-account-record.dto';
import { BankAccountRecordEntity } from './entities/bank-account-record.entity';



@Injectable()
export class BankAccountsRecordRepositoryService {
  constructor(
    @InjectRepository(BankAccountRecordEntity)
    private BARepository: Repository<BankAccountRecordEntity>,
  ) {}
  create(createBankAccountRecordDto: Partial<CreateBankAccountRecordDto>) {
    return this.BARepository.save(createBankAccountRecordDto);
  }

  findAll() {
    return this.BARepository.find();
  }

  findOne(id: number) {
    return this.BARepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdateBankAccountRecordDto) {
    const data = await this.BARepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdateBankAccountRecordDto> = { status: 'I' };

    const data = await this.BARepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
