import { PartialType } from '@nestjs/swagger';
import { PayrollNewsDiscountDto } from './create-payroll-news.dto';

export class UpdatePayrollNewsDiscountDto extends PartialType(PayrollNewsDiscountDto) {}
