import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { CreateOrderDTO } from 'src/order/dtos/create-order.dto';
import { PaymentCreditCardEntity } from './entities/payment-credit-cart.entity';
import { PaymentType } from 'src/payment-status/enums/payment-type.enum';
import { PaymentPixEntity } from './entities/payment-pix';

@Injectable()
export class PaymentService {

    constructor(
        @InjectRepository(PaymentEntity)
        private readonly paymentRepository: Repository<PaymentEntity>,
    ){}

    async createPayment(createOrderDTO: CreateOrderDTO): Promise<PaymentEntity> {
        if (createOrderDTO.amountPayments) {
            const paymentCreditCard = new PaymentCreditCardEntity(
                PaymentType.Done,
                0,
                0,
                0,
                createOrderDTO,
            );
            return this.paymentRepository.save(paymentCreditCard);
        }else if (createOrderDTO.codePix && createOrderDTO.datePayment) {
            const paymentPix = new PaymentPixEntity(
                PaymentType.Done,
                0,
                0,
                0,
                createOrderDTO,
            );
            return this.paymentRepository.save(paymentPix);
        }

        throw new BadRequestException(
            'Amount Payment or code pix or date paymente not found',
        )
    }
}
