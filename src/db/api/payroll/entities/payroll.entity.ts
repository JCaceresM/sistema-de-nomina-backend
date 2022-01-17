import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BankAccountEntity } from '../../bank-accounts/entities/account.entity';
import { PayrollNewsEntity } from '../../payroll-news/entities/payroll-news.entity';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
import { PayrollRecordEntity } from '../../payroll-record/entities/payroll-record.entity';
@Entity('payroll')
export class PayrollEntity {
  @PrimaryGeneratedColumn() 
   private id: number;

  @Column({ type: 'integer' })
  private salary: number;

  @Column({ type: 'integer' })
  private company_id: number;

  @Column({ type: 'text' })
  private name: string;

  @Column({ type: 'text' })
  private type: string;

  @Column({ type: 'text' })
  private payroll_frequency: string;

  @Column({ type: 'text' })
  private status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private created_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;


  @OneToMany(() => BankAccountEntity, accountEntity => accountEntity.payroll_id)
  disbursement: BankAccountEntity;

  @OneToMany(() => PayrollRecordEntity, accountEntity => accountEntity.payroll_id)
  payroll_record: PayrollRecordEntity;
    
  @OneToMany(() => PayrollNewsEntity, activity => activity.payroll_id)
  PayrollNews: PayrollNewsEntity[];
}
