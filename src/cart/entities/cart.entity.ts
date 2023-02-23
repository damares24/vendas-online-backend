import { CartProductEntity } from "src/cart-product/entities/cart-product.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'cart' })
export class CartEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;
    
    @Column({ name: 'user_id', nullable: false})
    userId: number;

    @Column({ name: 'active', nullable: false})
    active: boolean;

    @CreateDateColumn({ name: 'created_at'})
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updated_at: Date;

    @OneToMany(() => CartProductEntity, (cartProduct) => cartProduct.cart)
    cartProduct: CartProductEntity[];

}