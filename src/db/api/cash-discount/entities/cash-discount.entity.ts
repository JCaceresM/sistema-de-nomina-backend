import {
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PaysheetEntity } from '../../paysheet/entities/paysheet.entity';
@Entity('cash_discount')
export class CashDiscountEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ type: 'integer', unique: false })
  private amount: string;

  @Column({ type: 'text', unique: false })
  private company_id: string;

  @Column({ type: 'text', unique: false })
  private status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private update_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private create_at: Date;

  @Column({ type: 'text',nullable: true  })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;

  @ManyToOne(() => PaysheetEntity, paysheet => paysheet.cash_discountEntity)
  @JoinColumn({ name: "paysheet_id" })
  paysheet_id: PaysheetEntity;
}
