import { CartProductEntity } from "src/cart-product/entities/cart-product.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'cart' })
export class CartEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;
    
    @Column({ name: 'user_id', nullable: false})
    userId: string;

    @CreateDateColumn({ name: 'created_at'})
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updated_at: Date;

    @ManyToOne(() => CartProductEntity, (cartProduct) => cartProduct.cart)
    cartProduct: CartProductEntity[];
}