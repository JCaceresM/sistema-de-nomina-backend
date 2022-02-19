import { CommonEntity } from "src/common/entity/common-properties";
import { Column, Entity, JoinColumn, ManyToOne, } from "typeorm";
import { PayrollRecordDetailEntity } from "../../payroll-record-details/entities/payroll-record-detail.entity";
import { PayrollRecordEntity } from "../../payroll-record/entities/payroll-record.entity";

@Entity('payroll_news_record')
export class PayrollNewsRecord  extends CommonEntity {

  @Column({ type: 'real', unique: false })
  private amount: string;

  @Column({ type: 'text', unique: false })
  private type: number;

  @Column({ type: 'text', unique: false })
  private description: string;

  @Column({ type: 'text', unique: false })
  private name: string;

  @Column({ type: 'text', unique: false })
  private operation: number;

  @Column({ type: 'text', unique: false })
  private company_id: number;

  @Column({ type: 'text', unique: false })
  private status: string;

  @ManyToOne(() => PayrollRecordDetailEntity, payroll => payroll.PayrollNews)
  @JoinColumn({ name: "payroll_record_detail_id" })
  payroll_record_detail_id: PayrollRecordDetailEntity;
}
