import { UserEntity } from "../entities/user.entity"
import { UserType } from "../enum/user-type.enum"

export const UserEntityMock: UserEntity = {
    cpf: 454666555656,
    created_at: new Date(),
    email: 'user@example.com',
    id: 4587,
    name: 'nameMock',
    password: '$2b$10$OyfWRQiKEv7pghFi10bikONAYhpPAfCg8XemhivKNS7fRfBipnwSS',
    phone: '4564464646',
    typeUser:UserType.User,
    updated_at: new Date(),



}