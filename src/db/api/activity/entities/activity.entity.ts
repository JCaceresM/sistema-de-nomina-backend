import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
@Entity('activity')
export class ActivityEntity {
  @PrimaryGeneratedColumn('identity')
  private id: number;

  @Column({ type: 'text',nullable: true })
  private description: string;
  
  @Column({ type: 'text',nullable: true })
  private route: string;

  @Column({ type: 'text',nullable: true })
  private parent: string;

  @Column({ type: 'text', unique: false })
  private status: string;

  @Column({ type: 'text', unique: false })
  private id_actividad: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private created_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;
}
