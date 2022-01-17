import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('address')
export class AddressEntity {

    @PrimaryGeneratedColumn()    private id: number;
  
    @Column({ type: 'text', unique: true })
    private street: string;
  
    @Column({ type: 'text', unique: false })
    private city: string;
  
    @Column({ type: 'text', unique: false })
    private postal_code: string;

    @Column({ type: 'text', unique: false })
    private province: string;

    @Column({ type: 'text', unique: false })
    private municipalities: string;

    @Column({ type: 'text', unique: false })
    private sector: string;
  
   
  
    @Column({ type: 'text', unique: false })
    private status: string;
  
    @UpdateDateColumn({ type: 'timestamp',nullable: true })
    private updated_at: Date;
  
    @CreateDateColumn({ type: 'timestamp', nullable: false })
    private created_at: Date;
  
    @Column({ type: 'text',nullable: true })
    private user_update: string;
  
    @Column({ type: 'text',nullable: true  })
    private user_insert: string;
}
