import { GenericController } from '../../common/infrastructure/generic.controller';
import { PaymentTypeDO } from '../../data/do/PaymentType';
// @ts-ignore
import { PaymentTypeRequestDTO } from '../../data/dto/PaymentType/request';
// @ts-ignore
import { PaymentTypeResponseDTO } from '../../data/dto/PaymentType/response';
import { paymenttypeSA, PaymentTypeSA } from '../../service/applicatif/PaymentType';

class PaymentTypeController extends GenericController<
  PaymentTypeDO,
  PaymentTypeRequestDTO,
  PaymentTypeResponseDTO,
  PaymentTypeSA
> {}

export const paymenttypeController = new PaymentTypeController(paymenttypeSA);

