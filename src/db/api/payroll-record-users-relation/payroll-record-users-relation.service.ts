import { Injectable } from '@nestjs/common';
import { CreatePayrollRecordUsersRelationDto } from './dto/create-payroll-record-users-relation.dto';
import { UpdatePayrollRecordUsersRelationDto } from './dto/update-payroll-record-users-relation.dto';

@Injectable()
export class PayrollRecordUsersRelationService {
  create(createPayrollRecordUsersRelationDto: CreatePayrollRecordUsersRelationDto) {
    return 'This action adds a new payrollRecordUsersRelation';
  }

  findAll() {
    return `This action returns all payrollRecordUsersRelation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payrollRecordUsersRelation`;
  }

  update(id: number, updatePayrollRecordUsersRelationDto: UpdatePayrollRecordUsersRelationDto) {
    return `This action updates a #${id} payrollRecordUsersRelation`;
  }

  remove(id: number) {
    return `This action removes a #${id} payrollRecordUsersRelation`;
  }
}
