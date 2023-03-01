import { orderMock } from "../../order/__mocks__/order.mock";
import { OrderProductEntity } from "../entities/order-product.entity";
import { productMock } from "../../product/__mocks__/product.mock";

export const orderProductMock: OrderProductEntity = {
    amount: 534,
    createdAt: new Date(),
    id: 45543,
    orderId: orderMock.id,
    price: 534.4,
    productId: productMock.id,
    updatedAt: new Date(),
}