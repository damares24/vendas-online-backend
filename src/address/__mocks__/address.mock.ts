import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { UserEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  cep: '4546645',
  city_id: cityMock.id,
  complement: 'complement',
  created_at: new Date(),
  id: 45645,
  numberAddress: 599,
  updated_at: new Date(),
  user_id: UserEntityMock.id,
};
