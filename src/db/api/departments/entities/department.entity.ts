import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CompanyEntity } from '../../company/entities/company.entity';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
@Entity('department')
export class DepartmentEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ type: 'text', unique: true })
  private name: string;

  @Column({ type: 'text', unique: false })
  private location: string;

  @Column({ type: 'integer' })
  private budget: number;

  @Column({ type: 'text' })
  private company_id: string;

  @Column({ type: 'text', unique: false })
  private status: string;

  @Column({ type: 'text', unique: false })
  private type: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private update_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private create_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;

  @ManyToOne(() => CompanyEntity, (CompanyEntity) => CompanyEntity.departments)
  @JoinColumn({ name: "company_id" })
  company: CompanyEntity;

  @OneToMany(() => EmployeeEntity, employee => employee.department_id)
  employees: EmployeeEntity[];
}
