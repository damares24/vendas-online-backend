import { PaymentPixEntity } from '../entities/payment-pix';
import { paymentMock } from './payment.mock';

export const paymentPixMock: PaymentPixEntity = {
  ...paymentMock,
  code: 'fdsafdsa',
  datePayment: new Date(),
};