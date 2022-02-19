import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
import { PayrollNewsRecord } from '../../payroll-news-record/entities/payroll-news-record.entity';
import { PayrollNewsEntity } from '../../payroll-news/entities/payroll-news.entity';
import { PayrollRecordDetailEntity } from '../../payroll-record-details/entities/payroll-record-detail.entity';
import { PayrollEntity } from '../../payroll/entities/payroll.entity';
@Entity('payroll_record')
export class PayrollRecordEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ type: 'integer' })
  private company_id: number;

  @Column({ type: 'text' })
  private name: string;

  @Column({ type: 'text' })
  private type: string;

  @Column({ type: 'timestamp', nullable:true, unique: false})
  private registered_at: Date;

  @Column({ type: 'text' })
  private description: string;


  @OneToMany(() => PayrollRecordDetailEntity, (activity) => activity.payroll_record_id)
  PayrollRecordDetails: PayrollRecordDetailEntity[];

 

  @ManyToOne(() => PayrollEntity, (p) => p.payroll_record)
  @JoinColumn({ name: 'payroll_id' })
  payroll_id: PayrollEntity;


  @Column({ type: 'text', unique: false })
  status: string;

  

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;
  
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  created_at: Date;

  @Column({ type: 'text', nullable: true })
  user_update: string;

  @Column({ type: 'text', nullable: true })
  user_insert: string;
}
