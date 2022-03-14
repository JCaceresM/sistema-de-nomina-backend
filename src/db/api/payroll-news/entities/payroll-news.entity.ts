import {
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PayrollEntity } from '../../payroll/entities/payroll.entity';
@Entity('payroll_news')
export class PayrollNewsEntity {
  @PrimaryGeneratedColumn() 
   id: number;

  @Column({ type: 'real', unique: false })
   amount: number;

  @Column({ type: 'text', unique: false })
   type: number;
  
  @Column({ type: 'text', unique: false })
   description: string;

  @Column({ type: 'text', unique: false })
   name: string;

  @Column({ type: 'text', unique: false })
   operation: number;

  @Column({ type: 'text', unique: false })
   company_id: number;

  @Column({ type: 'text', unique: false })
   status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
   updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
   created_at: Date;

  @Column({ type: 'text',nullable: true  })
   user_update: string;

  @Column({ type: 'text',nullable: true })
   user_insert: string;

  @ManyToOne(() => PayrollEntity, payroll => payroll.PayrollNews)
  @JoinColumn({ name: "payroll_id" })
  payroll_id: PayrollEntity;
}
