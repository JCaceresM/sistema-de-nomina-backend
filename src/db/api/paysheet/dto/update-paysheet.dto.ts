import { PartialType } from '@nestjs/swagger';
import { CreatePaysheetDto } from './create-paysheet.dto';

export class UpdatePaysheetDto extends PartialType(CreatePaysheetDto) {}
