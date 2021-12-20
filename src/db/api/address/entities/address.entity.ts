import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('address')
export class AddressEntity {

    @PrimaryGeneratedColumn('uuid')
    private id: string;
  
    @Column({ type: 'text', unique: true })
    private street: string;
  
    @Column({ type: 'text', unique: false })
    private city: string;
  
    @Column({ type: 'text', unique: false })
    private postal_code: string;

    @Column({ type: 'text', unique: false })
    private province: string;

    @Column({ type: 'text', unique: false })
    private owner_ref: string;

    @Column({ type: 'text', unique: false })
    private region: string;
  
   
  
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
