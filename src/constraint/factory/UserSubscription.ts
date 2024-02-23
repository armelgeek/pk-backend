import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { UserSubscriptionDO } from '../../data/do/UserSubscription';
// @ts-ignore
import { UserSubscriptionRequestDTO } from '../../data/dto/UserSubscription/request';
// @ts-ignore
import { UserSubscriptionResponseDTO } from '../../data/dto/UserSubscription/response';

const commonSchema = {
  ...dataTDO.UserSubscription.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class UserSubscriptionFactory extends GenericFactory<
  UserSubscriptionDO,
  UserSubscriptionRequestDTO,
  UserSubscriptionResponseDTO
> {}

export const usersubscriptionFactory = new UserSubscriptionFactory(schema, schema, responseSchema);

