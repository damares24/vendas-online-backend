import { Controller, Get } from '@nestjs/common';
import { ReturnProduct } from './dtos/return-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){};

    @Get()
    async findAll(): Promise<ReturnProduct[]>{
        return (await this.productService.findAll()).map(
            (product) => new ReturnProduct(product)
        );
    }
}
