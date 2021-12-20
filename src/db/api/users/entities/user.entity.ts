import {
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  JoinTable,
  ManyToMany,
  Entity,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
import { RoleEntity } from '../../roles/entities/role.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: false })
  user_name: string;

  @Column({ type: 'text', unique: true })
  email_login: string;

  @Column({ type: 'text', unique: false })
  password: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  update_at: Date;

  @OneToOne(() => EmployeeEntity)
  @JoinColumn({ name: 'employee_id' })
  employee_id: string;

  @ManyToMany(() => RoleEntity)
  @JoinTable()
  roles: RoleEntity[];

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  create_at: Date;

  @Column({ type: 'text', nullable: true })
  user_update: string;

  @Column({ type: 'text', nullable: true })
  user_insert: string;

  @Column({ type: 'text', nullable: true})
  status: string;

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
