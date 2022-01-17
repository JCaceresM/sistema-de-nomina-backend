import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { BankCreateAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountEntity } from './entities/account.entity';


@Injectable()
export class BankAccountsRepositoryService {
  constructor(
    @InjectRepository(BankAccountEntity)
    private BARepository: Repository<BankAccountEntity>,
  ) {}
  create(createAccountDto: BankCreateAccountDto) {
    return this.BARepository.save(createAccountDto);
  }

  findAll() {
    return this.BARepository.find();
  }

  findOne(id: number) {
    return this.BARepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdateBankAccountDto) {
    const data = await this.BARepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdateBankAccountDto> = { status: 'I' };

    const data = await this.BARepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
