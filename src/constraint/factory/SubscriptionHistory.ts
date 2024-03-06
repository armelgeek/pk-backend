import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SubscriptionHistoryDO } from '../../data/do/SubscriptionHistory';
// @ts-ignore
import { SubscriptionHistoryRequestDTO } from '../../data/dto/SubscriptionHistory/request';
// @ts-ignore
import { SubscriptionHistoryResponseDTO } from '../../data/dto/SubscriptionHistory/response';

const commonSchema = {
  ...dataTDO.SubscriptionHistory.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subscriptionStripeId: 'subscriptionStripeId'
};

export class SubscriptionHistoryFactory extends GenericFactory<
  SubscriptionHistoryDO,
  SubscriptionHistoryRequestDTO,
  SubscriptionHistoryResponseDTO
> {}

export const subscriptionhistoryFactory = new SubscriptionHistoryFactory(schema, schema, responseSchema);

