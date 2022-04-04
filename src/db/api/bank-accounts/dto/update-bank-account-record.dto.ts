import { PartialType } from '@nestjs/swagger';
import { CreateBankAccountRecordDto } from './create-bank-account-record.dto';

export class UpdateBankAccountRecordDto extends PartialType(CreateBankAccountRecordDto) {}
