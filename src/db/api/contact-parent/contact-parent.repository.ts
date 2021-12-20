import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { CreateContactParentDto } from './dto/create-contact-parent.dto';
import { UpdateContactParentDto } from './dto/update-contact-parent.dto';
import { ContactParentEntity } from './entities/contact-parent.entity';

@Injectable()
export class ContactParentRepositoryService {
  constructor(
    @InjectRepository(ContactParentEntity)
    private contactParentRepository: Repository<ContactParentEntity>,
  ) {}
  create(createContactParentDto: CreateContactParentDto) {
    return this.contactParentRepository.save(createContactParentDto);
  }

  findAll() {
    return this.contactParentRepository.find();
  }

  findOne(id: number) {
    return this.contactParentRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdateContactParentDto) {
    const data = await this.contactParentRepository.update(
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
    const dataToUpdate: Partial<UpdateContactParentDto> = { status: 'I' };

    const data = await this.contactParentRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
