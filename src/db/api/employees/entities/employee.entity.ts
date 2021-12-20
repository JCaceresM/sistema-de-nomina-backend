import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DepartmentEntity } from '../../departments/entities/department.entity';
import { RoleEntity } from '../../roles/entities/role.entity';
import { ContactParentEntity } from '../../contact-parent/entities/contact-parent.entity';
import { ActivityEntity } from '../../activity/entities/activity.entity';
import { PaysheetEntity } from '../../paysheet/entities/paysheet.entity';
@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  document_id: string;

  @Column({ type: 'text', unique: false, nullable: true })
  fist_name: string;

  @Column({ type: 'text', unique: false, nullable: true })
  last_name: string;

  @Column({ type: 'text', unique: false, nullable: true })
  gender: string;

  @Column({ type: 'integer', unique: false, nullable: true })
  age: number;

  @Column({ type: 'text', unique: false, nullable: true })
  marital_status: string;

  @Column({ type: 'text', unique: false })
  status: string;

  @Column({ type: 'timestamp', unique: false, nullable: true })
  born_date: Date;

  @Column({ type: 'timestamp', unique: false, nullable: true })
  hire_date: Date;

  @Column({ type: 'text', unique: false, nullable: true })
  nss: string;

  @ManyToOne(() => DepartmentEntity, (department) => department.employees)
  @JoinColumn({ name: 'department_id' })
  department_id: DepartmentEntity;

  @Column({ type: 'text', unique: false, nullable: true })
  nomina_id: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  update_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  create_at: Date;

  @Column({ type: 'text', nullable: true })
  user_update: string;

  @Column({ type: 'text', nullable: true })
  user_insert: string;

 

  @OneToMany(
    () => ContactParentEntity,
    (contactParent) => contactParent.employee_id,
  )
  contactParent: ContactParentEntity[];

  @OneToMany(() => ActivityEntity, (activity) => activity.employee_id)
  activities: ActivityEntity[];

  @OneToOne(() => PaysheetEntity)
  @JoinColumn({ name: 'paysheet_id' })
  paysheet_id: PaysheetEntity;
}
