import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ContactInfoEntity } from '../../contact-info/entities/contact-info.entity';
import { DepartmentEntity } from '../../departments/entities/department.entity';
@Entity('company')

export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
   name: string;

  @Column({ type: 'text', unique: true, nullable: false })
   RNC: string;

  @Column({ type: 'timestamp' })
   foundation_date: Date;

  @Column({ type: 'text', unique: false })
   status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
   update_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
   create_at: Date;

  @Column({ type: 'text',nullable: true  })
   user_update: string;

  @Column({ type: 'text',nullable: true })
   user_insert: string;

  
  @OneToMany(() => DepartmentEntity, departmentEntity => departmentEntity.company)
  departments: DepartmentEntity[];
}
