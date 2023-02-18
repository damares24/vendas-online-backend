import { categoryMock } from "../../category/__mocks__/category.mock";
import { ProductEntity } from "../entities/product.entity";

export const productMock: ProductEntity = {
    categoryId: categoryMock.id,
    created_at: new Date(),
    id: 56595,
    image: 'http://image.com',
    name: 'name product mock',
    price: 34.3,
    updated_at: new Date(),
}