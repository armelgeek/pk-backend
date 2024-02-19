import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PrivateEventDO } from '../../data/do/PrivateEvent';
// @ts-ignore
import { PrivateEventRequestDTO } from '../../data/dto/PrivateEvent/request';
// @ts-ignore
import { PrivateEventResponseDTO } from '../../data/dto/PrivateEvent/response';

const commonSchema = {
  ...dataTDO.PrivateEvent.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class PrivateEventFactory extends GenericFactory<
  PrivateEventDO,
  PrivateEventRequestDTO,
  PrivateEventResponseDTO
> {}

export const privateeventFactory = new PrivateEventFactory(schema, schema, responseSchema);

