import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
export class CommonEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  private updated_at: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  private created_at: Date;

  @Column({ type: 'text', nullable: true })
  private user_update: string;

  @Column({ type: 'text', nullable: true })
  private user_insert: string;
}
