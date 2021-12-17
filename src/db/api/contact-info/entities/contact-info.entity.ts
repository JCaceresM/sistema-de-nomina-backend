import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompanyEntity } from '../../company/entities/company.entity';
@Entity('contact_info')
export class ContactInfoEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ type: 'text', unique: true, nullable: true})
  private relation_id: string;

  @Column({ type: 'text', unique: false,nullable: true })
  private owner_ref: string;

  @Column({ type: 'text',nullable: true })
  private tell: string;

  @Column({ type: 'text',nullable: true })
  private cell: string;

  @Column({ type: 'text',nullable: true })
  private fax: string;

  @Column({ type: 'text' })
  private company_id: string;

  @Column({ type: 'text', unique: false })
  private status: string;

  @Column({ type: 'text', unique: false,nullable: true })
  private email: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private update_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private create_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;

  
}
