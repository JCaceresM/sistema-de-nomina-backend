import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DepartmentEntity } from '../../departments/entities/department.entity';
@Entity('company')

export class CompanyEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text', unique: true })
   name: string;

  @Column({ type: 'text', unique: true, nullable: false })
   RNC: string;

  @Column({ type: 'timestamp' })
   foundation_date: Date;

  @Column({ type: 'text', unique: false })
   status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
   updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
   created_at: Date;

  @Column({ type: 'text',nullable: true  })
   user_update: string;

  @Column({ type: 'text',nullable: true })
   user_insert: string;

   @Column({ type: 'text', unique: false, nullable: true })
   fax: string;
 
   @Column({ type: 'text', unique: false, nullable: true })
   tell: string;
 
   @Column({ type: 'text', unique: false, nullable: true })
   cell: string;
 
   @Column({ type: 'text', unique: false, nullable: true })
   email: string;
  
  @OneToMany(() => DepartmentEntity, departmentEntity => departmentEntity.company)
  departments: DepartmentEntity[];
}
