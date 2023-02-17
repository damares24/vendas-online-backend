import { Test, TestingModule } from '@nestjs/testing';
import { CacheService } from '../cache.service';
import { CACHE_MANAGER } from '@nestjs/common';
import { UserEntityMock } from '../../user/__mocks__/user.mock';


describe('CacheService', () => {
  let service: CacheService;
  let cacheManager: Cache;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CacheService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: () => UserEntityMock,
            set: () => jest.fn(),
          }
        }
      ],
    }).compile();

    service = module.get<CacheService>(CacheService);
    cacheManager = module.get(CACHE_MANAGER);
   
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return data in cache', async () => {
    const user = await service.getCache('key', () => null);

    expect(user).toEqual(UserEntityMock);
  });

  // it('should return data in function', async () => {
  //   const result = { test: 'tes' };

  //   jest.spyOn(cacheManager, 'get').mockResolveValue(undefined);

  //   const user = await service.getCache('key', () => Promise.resolve(result));

  //   expect(user).toEqual(result);
  // });

 

});