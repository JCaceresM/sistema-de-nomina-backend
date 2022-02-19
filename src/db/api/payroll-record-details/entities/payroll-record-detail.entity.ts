export class PayrollRecordDetail {}
import { CommonEntity } from 'src/common/entity/common-properties';
import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
import { PayrollNewsRecord } from '../../payroll-news-record/entities/payroll-news-record.entity';
import { PayrollRecordEntity } from '../../payroll-record/entities/payroll-record.entity';

@Entity('payroll_record_detail')
export class PayrollRecordDetailEntity extends CommonEntity {
  @ManyToOne(() => PayrollRecordEntity, (p) => p.PayrollRecordDetails)
  @JoinColumn({ name: 'payroll_record_id' })
  payroll_record_id: PayrollRecordEntity;

  @OneToMany(() => PayrollNewsRecord, (activity) => activity.payroll_record_detail_id)
  PayrollNews: PayrollNewsRecord[];

  @Column({ type: 'integer', unique: false, nullable: true })
  voucher: number;

  @Column({ type: 'real', unique: false })
  salary: number;
  
  @ManyToOne(() => EmployeeEntity, (e) => e.payrollRecordDetails)
  @JoinColumn({ name: 'employee_id' })
  employee_id: EmployeeEntity[];
}
