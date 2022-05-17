import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
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
    id: number;

 

  @Column({ type: 'integer' })
   company_id: number;

  @Column({ type: 'text' })
   name: string;

  @Column({ type: 'text' })
   type: string;

  @Column({ type: 'text' })
   description: string;

  @Column({ type: 'text' })
   status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
   updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
   created_at: Date;

  @Column({ type: 'text',nullable: true })
   user_update: string;

  @Column({ type: 'text',nullable: true })
   user_insert: string;


  @ManyToOne(() => BankAccountEntity, accountEntity => accountEntity.disbursement)
  @JoinColumn({name:"bank_account_id"})
  bank_account_id: BankAccountEntity;

  @OneToMany(() => PayrollRecordEntity, accountEntity => accountEntity.payroll_id)
  payroll_record: PayrollRecordEntity;
    
  

  @ManyToMany(() => DepartmentEntity, {cascade:true})
  @JoinTable({name: 'payroll_deparments'})
  deparments: DepartmentEntity[]
}
