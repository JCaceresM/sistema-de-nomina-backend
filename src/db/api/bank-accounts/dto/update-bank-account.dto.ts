import { PartialType } from '@nestjs/swagger';
import { BankCreateAccountDto } from './create-bank-account.dto';

export class UpdateBankAccountDto extends PartialType(BankCreateAccountDto) {}
