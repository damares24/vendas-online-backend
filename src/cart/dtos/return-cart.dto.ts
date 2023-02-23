import { ReturnCartProductDto } from "src/cart-product/dtos/return-cart-product.dto";
import { CartProductEntity } from "../../cart-product/entities/cart-product.entity";
import { CartEntity } from "../entities/cart.entity";

export class ReturnCartDto {
    id: number;
    cartProduct:ReturnCartProductDto[];

    constructor(cart: CartEntity){
        this.id = cart.id;
        this.cartProduct = cart.cartProduct
         ? cart.cartProduct.map(
            (cartProduct) => new ReturnCartProductDto(cartProduct),
            )
         : undefined;
    };
}