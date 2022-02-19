import { Injectable } from '@nestjs/common';
import { CreatePayrollRecordDetailDto } from './dto/create-payroll-record-detail.dto';
import { UpdatePayrollRecordDetailDto } from './dto/update-payroll-record-detail.dto';

@Injectable()
export class PayrollRecordDetailsService {
  create(createPayrollRecordDetailDto: CreatePayrollRecordDetailDto) {
    return 'This action adds a new payrollRecordDetail';
  }

  findAll() {
    return `This action returns all payrollRecordDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payrollRecordDetail`;
  }

  update(id: number, updatePayrollRecordDetailDto: UpdatePayrollRecordDetailDto) {
    return `This action updates a #${id} payrollRecordDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} payrollRecordDetail`;
  }
}
