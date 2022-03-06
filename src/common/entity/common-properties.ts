import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
export class CommonEntity {
  @PrimaryGeneratedColumn()
   id: number;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
   updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
   created_at: Date;

  @Column({ type: 'text', nullable: true })
   user_update: string;

  @Column({ type: 'text', nullable: true })
   user_insert: string;
}
