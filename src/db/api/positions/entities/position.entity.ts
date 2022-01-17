import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { DepartmentEntity } from '../../departments/entities/department.entity';
import { EmployeeEntity } from '../../employees/entities/employee.entity';
@Entity('positions')
export class PositionEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @OneToMany(
    () => EmployeeEntity,
    (employeeEntity) => employeeEntity.position_id,
  )
  employee_id: EmployeeEntity[];

  @ManyToOne(() => DepartmentEntity, (departmentEntity) => departmentEntity.position_id)
  @JoinColumn({name: 'department_id'})
  department_id: DepartmentEntity;

  @Column({ type: 'text' })
  private status: string;
  
  @Column({ type: 'integer' })
  private company_id: string;

  @Column({ type: 'text' })
  private name: string;

  @Column({ type: 'integer' })
  private max_salary: number;

  @Column({ type: 'integer' })
  private min_salary: number;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private created_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true })
  private user_insert: string;
  
  @Column({ type: 'text',nullable: true })
  private description: string;

}
