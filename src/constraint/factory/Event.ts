import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { EventDO } from '../../data/do/Event';
// @ts-ignore
import { EventRequestDTO } from '../../data/dto/Event/request';
// @ts-ignore
import { EventResponseDTO } from '../../data/dto/Event/response';

const commonSchema = {
  ...dataTDO.Event.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class EventFactory extends GenericFactory<
  EventDO,
  EventRequestDTO,
  EventResponseDTO
> {}

export const eventFactory = new EventFactory(schema, schema, responseSchema);

