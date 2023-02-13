import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user'})
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', nullable: false})
    name: string;

    @Column({ name: 'email', nullable: false})
    email: string;

    @Column({ name: 'phone'})
    phone: string;

    @Column({ name: 'cpf', nullable: false})
    cpf: number;

    @Column({ name: 'password', nullable: false})
    password: string;
}