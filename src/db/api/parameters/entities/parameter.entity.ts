import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

export class EntityParameter {
    @PrimaryGeneratedColumn()
    id: number;
   
  
    @Column({ type: 'text' })
    private status: string;
    
    @Column({ type: 'integer' })
    private company_id: string;
  
    @Column({ type: 'text' })
    private name: string;

    @Column({ type: 'text' })
    private description: string;

    @Column({ type: 'text' })
    private parameter_type: string;
  

    @UpdateDateColumn({ type: 'timestamp',nullable: true })
    private updated_at: Date;
  
    @CreateDateColumn({ type: 'timestamp', nullable: false })
    private created_at: Date;
  
    @Column({ type: 'text',nullable: true })
    private user_update: string;
  
    @Column({ type: 'text',nullable: true })
    private user_insert: string;
}
