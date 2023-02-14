import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/createAddress.dto';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
    ){};

    async createAddress(createAddressDto: CreateAddressDto, user_id: number){
        return this.addressRepository.save({
            ...createAddressDto,
            user_id,
        });
    }
}
