import { PartialType } from '@nestjs/swagger';
import { CreatePayrollRecordDto } from './create-payroll-record.dto';

export class UpdatePayrollRecordDto extends PartialType(CreatePayrollRecordDto) {}
