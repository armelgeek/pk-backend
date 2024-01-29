import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { NotificationDO } from '../../data/do/Notification';
// @ts-ignore
import { NotificationRequestDTO } from '../../data/dto/Notification/request';
// @ts-ignore
import { NotificationResponseDTO } from '../../data/dto/Notification/response';

const commonSchema = {
  ...dataTDO.Notification.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class NotificationFactory extends GenericFactory<
  NotificationDO,
  NotificationRequestDTO,
  NotificationResponseDTO
> {}

export const notificationFactory = new NotificationFactory(schema, schema, responseSchema);

