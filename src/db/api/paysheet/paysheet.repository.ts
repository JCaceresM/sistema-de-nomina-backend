import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { CreatePaysheetDto } from './dto/create-paysheet.dto';
import { UpdatePaysheetDto } from './dto/update-paysheet.dto';
import { PaysheetEntity } from './entities/paysheet.entity';

@Injectable()
export class PaysheetRepositoryService {
  constructor(
    @InjectRepository(PaysheetEntity)
    private paysheetRepository: Repository<PaysheetEntity>,
  ) {}
  create(createPaysheetDto: CreatePaysheetDto) {
    return this.paysheetRepository.save(createPaysheetDto);
  }

  findAll() {
    return this.paysheetRepository.find();
  }

  findOne(id: number) {
    return this.paysheetRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdatePaysheetDto) {
    const data = await this.paysheetRepository.update(id, updateEmployeeDto);
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }

  async remove(id: number) {
    const dataToUpdate: Partial<UpdatePaysheetDto> = { status: 'I' };

    const data = await this.paysheetRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
