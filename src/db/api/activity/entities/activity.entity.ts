import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
@Entity('activity')
export class ActivityEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ type: 'text',nullable: true })
  private description: string;

  @Column({ type: 'text',nullable: true })
  private parent: string;

  @Column({ type: 'text', unique: false })
  private status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private update_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private create_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.contactParent)
  @JoinColumn({ name: "employee_id" })
  employee_id: EmployeeEntity;
}
