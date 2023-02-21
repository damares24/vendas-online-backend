import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReturnProduct } from './dtos/return-product.dto';
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { UserType } from 'src/user/enum/user-type.enum';
import { Roles } from 'src/decorators/roles.decorator';
import { DeleteResult } from 'typeorm';

@Roles(UserType.User, UserType.Admin)
@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){};

    @Get()
    async findAll(): Promise<ReturnProduct[]>{
        return (await this.productService.findAll()).map(
            (product) => new ReturnProduct(product)
        );
    }

    @Roles(UserType.Admin)
    @UsePipes(ValidationPipe)
    @Post()
    async createProduct(@Body() createProductDto: CreateProductDto) : Promise<ProductEntity> {
        return this.productService.createProduct(createProductDto);
    }

    @Roles(UserType.Admin)
    @Delete('/:productId')
    async deleteProduct(@Param('productId') productId: number) : Promise<DeleteResult> {
        return this.productService.deleteProduct(productId);
    }

}
