import { Column, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PaysheetEntity } from '../../paysheet/entities/paysheet.entity';
@Entity('payment_news')
export class PaymentNewsEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ type: 'integer', unique: false })
  private amount: number;

  @Column({ type: 'text', unique: false })
  private type: string;

  @Column({ type: 'text', unique: false })
  private description: string;

  @Column({ type: 'text', unique: false, nullable: false })
  private operation: string;

  @Column({ type: 'text', unique: false, nullable: false })
  private status: string;

  @Column({ type: 'text', unique: false,nullable: true })
  private nomina_id: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private update_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private create_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true  })
  private user_insert: string;
  
  @ManyToOne(() => PaysheetEntity, paysheet => paysheet.payment_news)
  @JoinColumn({ name: "paysheet_id" })
  paysheet_id: PaysheetEntity;
}
