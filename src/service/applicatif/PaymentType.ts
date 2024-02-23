import { GenericSA } from '../../common/service/generic.sa';
import {
    paymenttypeFactory,
  PaymentTypeFactory,
} from '../../constraint/factory/PaymentType';
import { PaymentTypeDO } from '../../data/do/PaymentType';
// @ts-ignore
import { PaymentTypeRequestDTO } from '../../data/dto/PaymentType/request';
// @ts-ignore
import { PaymentTypeResponseDTO } from '../../data/dto/PaymentType/response';
import { paymenttypeSM, PaymentTypeSM } from '../metier/PaymentType';

export class PaymentTypeSA extends GenericSA<
  PaymentTypeDO,
  PaymentTypeRequestDTO,
  PaymentTypeResponseDTO,
  PaymentTypeSM,
  PaymentTypeFactory
> {
}

export const paymenttypeSA = new PaymentTypeSA(paymenttypeSM, paymenttypeFactory, 'PaymentType');

