import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CashDiscountEntity } from '../../cash-discount/entities/cash-discount.entity';
import { PaymentNewsEntity } from '../../payment-news/entities/payment-news.entity';
@Entity('paysheet')
export class PaysheetEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ type: 'integer' })
  private salary: number;

  @Column({ type: 'text',nullable: true })
  private dep_id: string;

  @Column({ type: 'text' })
  private company_id: string;

  @Column({ type: 'text' })
  private status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private update_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private create_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;

  @OneToMany(() => PaymentNewsEntity, paymentNews => paymentNews.paysheet_id)
  payment_news: PaymentNewsEntity[];

  @OneToMany(() => CashDiscountEntity, activity => activity.paysheet_id)
  cash_discountEntity: CashDiscountEntity[];
}
