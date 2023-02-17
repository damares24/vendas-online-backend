import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateAddressDto } from './dto/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { UserId } from '../decorators/user-id.decorator';
import { ReturnAddressDto } from './dto/returnAddress.dto';

@Roles(UserType.User, UserType.Admin)
@Controller('address')
export class AddressController {
    constructor(
        private readonly addressService: AddressService
    ){};

    
    @Post()
    @UsePipes(ValidationPipe)
    async createAddress(
        @Body() createAddressDto: CreateAddressDto,
        @UserId() user_id: number): Promise<AddressEntity>{
            console.log('user_id', user_id)
        return this.addressService.createAddress(createAddressDto, user_id);
    }
    
    @Get()
    @UsePipes(ValidationPipe)
    async findAllAddressByUserId(
        @UserId() user_id: number): Promise<ReturnAddressDto[]>{
        return  (await this.addressService.findAllAddressByUserId(user_id)).map(
            (address) => new ReturnAddressDto(address),
          );
    }
}
