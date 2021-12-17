import { PartialType } from '@nestjs/swagger';
import { CreateCashDiscountDto } from './create-cash-discount.dto';

export class UpdateCashDiscountDto extends PartialType(CreateCashDiscountDto) {}
