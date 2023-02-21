import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReturnCategory } from './dtos/return-category.dto';
import { CategoryService } from './category.service';
import { UserType } from '../user/enum/user-type.enum';
import { Roles } from '../decorators/roles.decorator';
import { CreateCategory } from './dtos/create-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Roles(UserType.User, UserType.Admin)
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){};

    @Get()
    async findAllCategories(): Promise<ReturnCategory[]>{
        return  (await this.categoryService.findAllCategories()).map(
            (category) => new ReturnCategory(category),
        );
    }
    
    @Roles(UserType.Admin)
    @UsePipes(ValidationPipe)
    @Post()
    async createCategory(@Body() createCategory: CreateCategory): Promise<CategoryEntity>{
        return this.categoryService.createCategory(createCategory);
    }
}
