import { PartialType } from '@nestjs/swagger';
import { CreatePayrollNewsRelationDto } from './create-payroll-news-relation.dto';

export class UpdatePayrollNewsRelationDto extends PartialType(CreatePayrollNewsRelationDto) {}
