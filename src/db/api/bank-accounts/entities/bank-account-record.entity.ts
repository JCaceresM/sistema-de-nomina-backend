import { CommonEntity } from 'src/common/entity/common-properties';
import { Column, Entity } from 'typeorm';

@Entity('bank_account_record')
export class BankAccountRecordEntity extends CommonEntity {
  @Column({ type: 'integer', unique: false })
  payroll_record_id: number;

  @Column({ type: 'integer', unique: false })
  bank_account_id: number;

  @Column({ type: 'bigint', unique: false })
  amount: number;

  @Column({ type: 'text', unique: false })
  transaction_type: string;
  
  @Column({ type: 'text', unique: false })
  description: string;
}
