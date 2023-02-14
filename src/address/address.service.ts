import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/createAddress.dto';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
        private readonly userService: UserService,
        private readonly cityService: CityService,
    ){};

    async createAddress(createAddressDto: CreateAddressDto, user_id: number){
        await this.userService.findUserById(user_id);
        await this.cityService.findCityById(createAddressDto.city_id);
        return this.addressRepository.save({
            ...createAddressDto,
            user_id,
        });
    }
}
