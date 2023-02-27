import { stateMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  created_at: new Date(),
  id: 456666665,
  name: 'cityMock',
  state_id: stateMock.id,
  updated_at: new Date(),
};
