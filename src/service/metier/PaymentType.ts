import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PaymentTypeDO } from '../../data/do/PaymentType';
import { PaymentTypeRepository } from '../../repository/PaymentType';

export class PaymentTypeSM extends GenericSM<PaymentTypeDO, string, PaymentTypeRepository> {
}

export const paymenttypeSM = new PaymentTypeSM(getCustomRepository(PaymentTypeRepository));

