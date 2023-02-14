import {  Injectable } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        
        private readonly cacheService: CacheService
    ){};

    async getAllCitiesByStateId(state_id: number): Promise<CityEntity[]> {
       return this.cacheService.getCache<CityEntity[]> ( `state_${state_id}`, () => 
            this.cityRepository.find({
                where: {
                    state_id,
                },
            }),
         );
    }
};
       

