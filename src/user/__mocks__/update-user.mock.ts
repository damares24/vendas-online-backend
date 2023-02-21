import { UpdatePasswordDto } from "../dtos/update-password.dto";

export const updatePasswordMock: UpdatePasswordDto = {
    lastPassword: '12345',
    newPassword: 'defref'
}

export const updatePasswordInvalidMock: UpdatePasswordDto = {
    lastPassword: 'eferfregre',
    newPassword: 'enjferjfhr'
}