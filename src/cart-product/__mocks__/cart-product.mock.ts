import { cartMock } from "../../cart/__mocks__/cart.mock";
import { CartProductEntity } from "../entities/cart-product.entity";
import { productMock } from "../../product/__mocks__/product.mock";

export const cartProductMock: CartProductEntity = {
    amount: 589,
    cartId: cartMock.id,
    created_at: new Date(),
    id: 5879,
    productId: productMock.id,
    updated_at: new Date(),
}