import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReturnProduct } from './dtos/return-product.dto';
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { UserType } from 'src/user/enum/user-type.enum';
import { Roles } from 'src/decorators/roles.decorator';

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

}
