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
@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ type: 'text', unique: false,nullable: true })
  private street: string;


  @Column({ type: 'bigint', unique: false,nullable: true })
  private province: number;

  @Column({ type: 'bigint', unique: false ,nullable: true})
  private municipality: number;

  @Column({ type: 'bigint', unique: false,nullable: true })
  private sector: number;

  @Column({ type: 'text', unique: false,nullable: true })
  private status: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  private updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private created_at: Date;

  @Column({ type: 'text', nullable: true })
  private user_update: string;

  @Column({ type: 'text', nullable: true })
  private user_insert: string;

  @ManyToOne(() => EmployeeEntity, (positionEntity) => positionEntity.address)
  @JoinColumn({ name: "employee_id" })
  employee_id: number;
}
