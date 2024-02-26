import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { MessageDO } from '../../data/do/Message';
// @ts-ignore
import { MessageRequestDTO } from '../../data/dto/Message/request';
// @ts-ignore
import { MessageResponseDTO } from '../../data/dto/Message/response';

const commonSchema = {
  ...dataTDO.Message.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class MessageFactory extends GenericFactory<
  MessageDO,
  MessageRequestDTO,
  MessageResponseDTO
> {}

export const messageFactory = new MessageFactory(schema, schema, responseSchema);

