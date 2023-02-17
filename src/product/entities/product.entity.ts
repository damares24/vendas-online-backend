import { CategoryEntity } from "../../category/entities/category.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'product'})
export class ProductEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false})
    name: string;

    @Column({ name: 'category_id', nullable: false})
    categoryId: number;

    @Column({ name: 'price', nullable: false})
    price: number;

    @Column({ name: 'name', nullable: false})
    image: string;

    @CreateDateColumn({ name: 'created_at'})
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updated_at: Date;

    @ManyToOne(() => CategoryEntity, (category:CategoryEntity) => category.products)
    @JoinColumn({ name: 'category_id', referencedColumnName: 'id'})
    category?: CategoryEntity;
}