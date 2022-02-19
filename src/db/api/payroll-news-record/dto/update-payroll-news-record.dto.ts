import { PartialType } from '@nestjs/swagger';
import { CreatePayrollNewsRecordDto } from './create-payroll-news-record.dto';

export class UpdatePayrollNewsRecordDto extends PartialType(CreatePayrollNewsRecordDto) {}
