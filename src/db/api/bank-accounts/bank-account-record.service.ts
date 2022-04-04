import { Injectable } from '@nestjs/common';
import { CreateBankAccountRecordDto } from './dto/create-bank-account-record.dto';
import { UpdateBankAccountRecordDto } from './dto/update-bank-account-record.dto';

@Injectable()
export class BankAccountRecordService {
  create(createBankAccountRecordDto: CreateBankAccountRecordDto) {
    return 'This action adds a new bankAccountRecord';
  }

  findAll() {
    return `This action returns all bankAccountRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bankAccountRecord`;
  }

  update(id: number, updateBankAccountRecordDto: UpdateBankAccountRecordDto) {
    return `This action updates a #${id} bankAccountRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccountRecord`;
  }
}
