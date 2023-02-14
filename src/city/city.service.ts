import {  CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ){};

    async getAllCitiesByStateId(state_id: number): Promise<CityEntity[]> {
        const citiesCache: CityEntity[] = await this.cacheManager.get(`state_${state_id}`);
        
        if (citiesCache){
            return citiesCache;
        }

        const cities = await this.cityRepository.find({
            where: {
                state_id,
            },
        });
        await this.cacheManager.set(`state_${state_id}`, cities);

        return  cities;
    }
}
