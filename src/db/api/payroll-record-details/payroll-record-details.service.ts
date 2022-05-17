import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { Repository } from 'typeorm';
import { CreatePayrollRecordDetailDto } from './dto/create-payroll-record-detail.dto';
import { UpdatePayrollRecordDetailDto } from './dto/update-payroll-record-detail.dto';
import { PayrollRecordDetailEntity } from './entities/payroll-record-detail.entity';

@Injectable()
export class PayrollRecordDetailsService {
  constructor(
    @InjectRepository(PayrollRecordDetailEntity)
    private payrollRecordDetailRepository: Repository<PayrollRecordDetailEntity>,
  ) {}
  create(createPayrollRecordDetailDto: CreatePayrollRecordDetailDto) {
    return 'This action adds a new payrollRecordDetail';
  }

  findAll() {
    return `This action returns all payrollRecordDetails`;
  }

  async findOne(id: number) {
    return await this.payrollRecordDetailRepository.find({ where: { id } });
  }
  async findByParams(params: Record<string, unknown>) {
    return await this.payrollRecordDetailRepository.find({ where:  params  });
  }

  async update(
    id: number,
    updatePayrollRecordDetailDto: UpdatePayrollRecordDetailDto,
  ) {
    const data = await this.payrollRecordDetailRepository.update(
      id,
      updatePayrollRecordDetailDto,
    );
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne(id) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }
  async generateVaucher(
    id: number,
  ) {
    const data = await this.findByParams({payroll_record_id:id});     
    if (data.length) {
      return Promise.all(
        data.map(async (row) => {

          const updated = await this.payrollRecordDetailRepository.update(
            row.id,
            { voucher: parseInt(`${Math.random() * 1000000000}`)},
          );
          if (updated.affected) {
            return { message: `Record with id ${row.id} updated` };
          } else {
            return { message: `Record with id ${row.id} unable to update` };
          }
        }),
      );
    }

    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }
}
