import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
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
import { DepartmentEntity } from '../../departments/entities/department.entity';
@Entity('payroll')
export class PayrollEntity {
  @PrimaryGeneratedColumn() 
   private id: number;

 

  @Column({ type: 'integer' })
  private company_id: number;

  @Column({ type: 'text' })
  private name: string;

  @Column({ type: 'text' })
  private type: string;

  @Column({ type: 'text' })
  private description: string;

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


  @ManyToOne(() => BankAccountEntity, accountEntity => accountEntity.disbursement)
  @JoinColumn({name:"bank_account_id"})
  bank_account_id: BankAccountEntity;

  @OneToMany(() => PayrollRecordEntity, accountEntity => accountEntity.payroll_id)
  payroll_record: PayrollRecordEntity;
    
  @OneToMany(() => PayrollNewsEntity, activity => activity.payroll_id)
  PayrollNews: PayrollNewsEntity[];

  @OneToOne(() => DepartmentEntity)
  @JoinColumn({name:"department_id"})
  profile: DepartmentEntity;
}
