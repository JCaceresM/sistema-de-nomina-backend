import { PartialType } from '@nestjs/swagger';
import { CreatePayrollRecordUsersRelationDto } from './create-payroll-record-users-relation.dto';

export class UpdatePayrollRecordUsersRelationDto extends PartialType(CreatePayrollRecordUsersRelationDto) {}
