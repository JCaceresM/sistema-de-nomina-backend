import { Injectable } from '@nestjs/common';
import { CreateContactParentDto } from './dto/create-contact-parent.dto';
import { UpdateContactParentDto } from './dto/update-contact-parent.dto';

@Injectable()
export class ContactParentService {
  create(createContactParentDto: CreateContactParentDto) {
    return 'This action adds a new contactParent';
  }

  findAll() {
    return `This action returns all contactParent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactParent`;
  }

  update(id: number, updateContactParentDto: UpdateContactParentDto) {
    return `This action updates a #${id} contactParent`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactParent`;
  }
}
