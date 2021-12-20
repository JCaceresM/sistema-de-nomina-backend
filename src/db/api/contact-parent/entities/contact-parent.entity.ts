import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
@Entity('contact_parent')
export class ContactParentEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ type: 'text', unique: true })
  private fist_name: string;

  @Column({ type: 'text', unique: false })
  private last_name: string;

  @Column({ type: 'text' })
  private parent_type: string;

  @Column({ type: 'text',nullable: true })
  private cell: string;

  @Column({ type: 'text',nullable: true })
  private tell: string;

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

  @ManyToOne(() => EmployeeEntity, employee => employee.contactParent)
  @JoinColumn({ name: "employee_id" })

  employee_id: EmployeeEntity;
}
