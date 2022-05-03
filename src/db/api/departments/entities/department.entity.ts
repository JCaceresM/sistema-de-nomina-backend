import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CompanyEntity } from '../../company/entities/company.entity';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
import { PositionEntity } from '../../positions/entities/position.entity';
@Entity('department')
export class DepartmentEntity {
  @PrimaryGeneratedColumn()  private id: number;

  @Column({ type: 'text', unique: true })
  private name: string;

  @Column({ type: 'text', unique: false })
  private location: string;

  @Column({ type: 'real', nullable: true })
  private budget: number;


  @Column({ type: 'text', unique: false })
  private status: string;

  @Column({ type: 'text', unique: false })
  private type: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private created_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;

  @ManyToOne(() => CompanyEntity, (CompanyEntity) => CompanyEntity.departments)
  @JoinColumn({ name: "company_id" })
  company: CompanyEntity;

  @OneToMany(
    () => PositionEntity,
    (positionEntity) => positionEntity.department_id,
  )
  position_id: PositionEntity[];
  
  @OneToMany(() => EmployeeEntity, employee => employee.department_id)
  employees: EmployeeEntity[];

  @ManyToMany(() => DepartmentEntity)
  @JoinTable({name: 'department_relation', },)
  categories: DepartmentEntity[]
}
