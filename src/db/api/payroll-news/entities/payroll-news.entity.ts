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
  @PrimaryGeneratedColumn()  private id: number;

  @Column({ type: 'integer', unique: false })
  private amount: string;

  @Column({ type: 'text', unique: false })
  private company_id: number;

  @Column({ type: 'text', unique: false })
  private status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private created_at: Date;

  @Column({ type: 'text',nullable: true  })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;

  @ManyToOne(() => PayrollEntity, payroll => payroll.PayrollNews)
  @JoinColumn({ name: "payroll_id" })
  payroll_id: PayrollEntity;
}
