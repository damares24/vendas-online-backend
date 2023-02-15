import { AddressEntity } from "../entities/address.entity";


export class ReturnAddressDto {
    
    complement: string;
    numberAddress: number;
    cep: string;
    city_id: number;

    constructor(addresses: AddressEntity){
        this.complement = addresses.complement;
        this.numberAddress = addresses.numberAddress;
        this.cep = addresses.cep;
    }

}