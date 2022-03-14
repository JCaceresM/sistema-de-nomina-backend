import { PartialType } from '@nestjs/swagger';
import { PayrollNewsDto } from './create-payroll-news.dto';

export class UpdatePayrollNewsDto extends PartialType(PayrollNewsDto) {}
