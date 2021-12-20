import { PartialType } from '@nestjs/swagger';
import { CreatePaymentNewsDto } from './create-payment-news.dto';

export class UpdatePaymentNewsDto extends PartialType(CreatePaymentNewsDto) {}
