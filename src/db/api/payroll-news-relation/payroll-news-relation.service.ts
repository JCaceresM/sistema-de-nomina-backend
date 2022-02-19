import { Injectable } from '@nestjs/common';
import { CreatePayrollNewsRelationDto } from './dto/create-payroll-news-relation.dto';
import { UpdatePayrollNewsRelationDto } from './dto/update-payroll-news-relation.dto';

@Injectable()
export class PayrollNewsRelationService {
  create(createPayrollNewsRelationDto: CreatePayrollNewsRelationDto) {
    return 'This action adds a new payrollNewsRelation';
  }

  findAll() {
    return `This action returns all payrollNewsRelation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payrollNewsRelation`;
  }

  update(id: number, updatePayrollNewsRelationDto: UpdatePayrollNewsRelationDto) {
    return `This action updates a #${id} payrollNewsRelation`;
  }

  remove(id: number) {
    return `This action removes a #${id} payrollNewsRelation`;
  }
}
