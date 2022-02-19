import { PartialType } from '@nestjs/swagger';
import { CreatePayrollRecordDetailDto } from './create-payroll-record-detail.dto';

export class UpdatePayrollRecordDetailDto extends PartialType(CreatePayrollRecordDetailDto) {}
