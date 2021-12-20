import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { CreateContactInfoDto } from './dto/create-contact-info.dto';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';
import { ContactInfoEntity } from './entities/contact-info.entity';


@Injectable()
export class ContactInfoRepositoryService {
  constructor(@InjectRepository(ContactInfoEntity) private contactInfoRepository: Repository<ContactInfoEntity>) {}
  create(createContactInfoDto: CreateContactInfoDto) {
    return this.contactInfoRepository.save(createContactInfoDto);
  }

  findAll() {
    return this.contactInfoRepository.find();
  }

  findOne(id: number) {
    return this.contactInfoRepository.find({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: UpdateContactInfoDto) {
    const data = await this.contactInfoRepository.update(
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
    const dataToUpdate: Partial<UpdateContactInfoDto> = { status: 'I' };
    
    const data = await this.contactInfoRepository.update(id, dataToUpdate);
    if (data.affected) {
      return { message: `Record with ${id} removed` };
    }
    throw BadRequest({
      message: `unable to delete record with id ${id}`,
    });
  }
}
