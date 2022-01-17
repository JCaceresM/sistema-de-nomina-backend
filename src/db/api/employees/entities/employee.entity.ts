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
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { DepartmentEntity } from '../../departments/entities/department.entity';
import { RoleEntity } from '../../roles/entities/role.entity';
import { ActivityEntity } from '../../activity/entities/activity.entity';
import { PayrollEntity } from '../../payroll/entities/payroll.entity';
import { PositionEntity } from '../../positions/entities/position.entity';
@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  document_id: string;

  @Column({ type: 'text', unique: false })
  user_name: string;

  @Column({ type: 'text', unique: true })
  email_login: string;

  @Column({ type: 'text', unique: false })
  password: string;

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
  department_id: DepartmentEntity;

  @Column({ type: 'text', unique: false, nullable: true })
  fax: string;

  @Column({ type: 'text', unique: false, nullable: true })
  tell: string;

  @Column({ type: 'text', unique: false, nullable: true })
  cell: string;

  @Column({ type: 'text', unique: false, nullable: true })
  email: string;

  @Column({ type: 'integer', unique: false })
  company_id: number;

  @Column({ type: 'text', unique: true,nullable: true })
   full_name_emergency_contact: string;

  @Column({ type: 'text',nullable: true })
   cell_emergency_contact: string;

  @Column({ type: 'text',nullable: true })
   tell_emergency_contact: string;

  @Column({ type: 'text',nullable: true })
   relation_emergency_contact: string;

  @Column({ type: 'text',nullable: true })
   payment_method: string;

  @Column({ type: 'text',nullable: true })
   blond_type: string;

  @Column({ type: 'timestamp', nullable: true })
  relinquishment: Date;

  @Column({ type: 'text', nullable: true })
  relinquishment_detail: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  created_at: Date;

  @Column({ type: 'text', nullable: true })
  user_update: string;

  @Column({ type: 'text', nullable: true })
  working_time: string;

  @Column({ type: 'text', nullable: true })
  user_insert: string;

  @ManyToMany(() => RoleEntity)
  @JoinTable()
  roles: RoleEntity[];


  @ManyToMany(() => ActivityEntity)
  @JoinTable()
  activities: ActivityEntity[];

  @ManyToOne(() => PositionEntity, (positionEntity) => positionEntity.employee_id)
  @JoinColumn({ name: "position_id" })
  position_id: PositionEntity[];

  @OneToOne(() => PayrollEntity)
  @JoinColumn({ name:'payroll_id'})
  payroll_id: PayrollEntity;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const saltOrRounds = 10;
    if (!this.password) {
      return;
    }
    this.password = await bcrypt.hash(this.password, saltOrRounds);
  }
}
