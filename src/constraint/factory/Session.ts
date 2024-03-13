import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SessionDO } from '../../data/do/Session';
// @ts-ignore
import { SessionRequestDTO } from '../../data/dto/Session/request';
// @ts-ignore
import { SessionResponseDTO } from '../../data/dto/Session/response';

const commonSchema = {
  ...dataTDO.Session.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class SessionFactory extends GenericFactory<
  SessionDO,
  SessionRequestDTO,
  SessionResponseDTO
> {}

export const sessionFactory = new SessionFactory(schema, schema, responseSchema);

