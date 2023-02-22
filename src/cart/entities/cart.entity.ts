import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CartEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;
    
    @Column({ name: 'user_id', nullable: false})
    userId: string;

    @CreateDateColumn({ name: 'created_at'})
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updated_at: Date;
}