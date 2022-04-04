import {
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { PayrollEntity } from '../../payroll/entities/payroll.entity';

@Entity('bank_account')
export class BankAccountEntity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'text', unique: false })
  description: string;
  
  @Column({ type: 'text', unique: false })
  type: string;
  
  @Column({ type: 'text', unique: false })
  name: string;

  @Column({ type: 'text', unique: false })
  status: string;

  @Column({ type: 'text', unique: false })
  operation: string;

  @Column({ type: 'real', unique: false })
  balance: number;

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

  @OneToMany(() => PayrollEntity, (payrollEntity) => payrollEntity.bank_account_id)
  disbursement: PayrollEntity[];
}
