import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SubscriptionOfferDO } from '../../data/do/SubscriptionOffer';
// @ts-ignore
import { SubscriptionOfferRequestDTO } from '../../data/dto/SubscriptionOffer/request';
// @ts-ignore
import { SubscriptionOfferResponseDTO } from '../../data/dto/SubscriptionOffer/response';

const commonSchema = {
  ...dataTDO.SubscriptionOffer.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class SubscriptionOfferFactory extends GenericFactory<
  SubscriptionOfferDO,
  SubscriptionOfferRequestDTO,
  SubscriptionOfferResponseDTO
> {}

export const subscriptionofferFactory = new SubscriptionOfferFactory(schema, schema, responseSchema);

