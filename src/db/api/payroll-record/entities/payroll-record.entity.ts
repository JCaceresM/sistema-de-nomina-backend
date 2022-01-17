import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
import { PayrollNewsEntity } from '../../payroll-news/entities/payroll-news.entity';
import { PayrollEntity } from '../../payroll/entities/payroll.entity';
@Entity('payroll_record')
export class PayrollRecordEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @ManyToOne(() => EmployeeEntity, (e) => e.position_id)
  @JoinColumn({ name: 'employee_id' })
  employee_id: EmployeeEntity[];

  @ManyToOne(() => PayrollEntity, (p) => p.payroll_record)
  @JoinColumn({ name: 'payroll_id' })
  payroll_id: PayrollEntity;

  @ManyToMany(() => PayrollNewsEntity)
  @JoinColumn()
  PayrollNews: PayrollNewsEntity;

  @Column({ type: 'text', unique: false })
  status: string;

  @Column({ type: 'integer', unique: false })
  voucher: number;

  @Column({ type: 'integer', unique: false })
  company_id: number;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  created_at: Date;

  @Column({ type: 'text', nullable: true })
  user_update: string;

  @Column({ type: 'text', nullable: true })
  user_insert: string;
}
