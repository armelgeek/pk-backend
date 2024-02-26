import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PaymentTypeDO } from '../../data/do/PaymentType';
// @ts-ignore
import { PaymentTypeRequestDTO } from '../../data/dto/PaymentType/request';
// @ts-ignore
import { PaymentTypeResponseDTO } from '../../data/dto/PaymentType/response';

const commonSchema = {
  ...dataTDO.PaymentType.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class PaymentTypeFactory extends GenericFactory<
  PaymentTypeDO,
  PaymentTypeRequestDTO,
  PaymentTypeResponseDTO
> {}

export const paymenttypeFactory = new PaymentTypeFactory(schema, schema, responseSchema);

