import { ProductEntity } from "../../product/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CartEntity } from "../../cart/entities/cart.entity";

@Entity({ name: 'cart_product'})
export class CartProductEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'cart_id', nullable: false})
    cartId: number;

    @Column({ name: 'product_id', nullable: false})
    productId: number;

    @Column({ name: 'amount', nullable: false})
    amount: number;

    @CreateDateColumn({ name: 'created_at'})
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updated_at: Date;

    @ManyToOne(() => ProductEntity, (productEntity?: ProductEntity) => productEntity.cartProduct)
    @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
    product?: ProductEntity;

    @ManyToOne(() => CartEntity, (cartEntity) => cartEntity.cartProduct)
    @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
    cart?: CartEntity;
    
}