import { PartialType } from '@nestjs/swagger';
import { CreateContactParentDto } from './create-contact-parent.dto';

export class UpdateContactParentDto extends PartialType(CreateContactParentDto) {}
