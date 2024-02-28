import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { LinkDO } from '../../data/do/Link';
// @ts-ignore
import { LinkRequestDTO } from '../../data/dto/Link/request';
// @ts-ignore
import { LinkResponseDTO } from '../../data/dto/Link/response';

const commonSchema = {
  ...dataTDO.Link.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class LinkFactory extends GenericFactory<
  LinkDO,
  LinkRequestDTO,
  LinkResponseDTO
> {}

export const linkFactory = new LinkFactory(schema, schema, responseSchema);

