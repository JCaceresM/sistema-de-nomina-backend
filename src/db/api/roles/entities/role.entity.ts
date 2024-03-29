import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ type: 'text', unique: true })
  private rol_name: string;

  @Column({ type: 'text', unique: false })
  private type: string;

  @Column({ type: 'text' })
  private company_id: string;

  @Column({ type: 'text', unique: false })
  private status: string;

  @UpdateDateColumn({ type: 'timestamp',nullable: true })
  private update_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private create_at: Date;

  @Column({ type: 'text',nullable: true })
  private user_update: string;

  @Column({ type: 'text',nullable: true  })
  private user_insert: string;
}
