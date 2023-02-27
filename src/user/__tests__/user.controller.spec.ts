import { Test, TestingModule } from '@nestjs/testing';
import { UserEntityMock } from '../../user/__mocks__/user.mock';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { createUserMock } from '../__mocks__/createUser.mock';
import { updatePasswordMock } from '../__mocks__/update-user.mock';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: {
            createUser: jest.fn().mockResolvedValue(UserEntityMock),
            updatePasswordUser: jest.fn().mockResolvedValue(UserEntityMock),
            getUserByIdUsingRelations: jest
              .fn()
              .mockResolvedValue(UserEntityMock),
            getAllUser: jest.fn().mockResolvedValue([UserEntityMock]),
          },
        },
      ],
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('should return user Entity in createUser', async () => {
    const user = await controller.createUser(createUserMock);

    expect(user).toEqual(UserEntityMock);
  });

  it('should return ReturnUser in getAllUser', async () => {
    const users = await controller.getAllUser();

    expect(users).toEqual([
      {
        id: UserEntityMock.id,
        name: UserEntityMock.name,
        email: UserEntityMock.email,
        phone: UserEntityMock.phone,
        cpf: UserEntityMock.cpf,
      },
    ]);
  });

  it('should return ReturnUser in getUserById', async () => {
    const user = await controller.getUserById(UserEntityMock.id);

    expect(user).toEqual({
      id: UserEntityMock.id,
      name: UserEntityMock.name,
      email: UserEntityMock.email,
      phone: UserEntityMock.phone,
      cpf: UserEntityMock.cpf,
    });
  });

  it('should return UserEntity in updatePasswordUser', async () => {
    const user = await controller.updatePasswordUser(
      updatePasswordMock,
      UserEntityMock.id,
    );

    expect(user).toEqual(UserEntityMock);
  });
});
