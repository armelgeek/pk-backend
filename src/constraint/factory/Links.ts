import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { LinksDO } from '../../data/do/Links';
// @ts-ignore
import { LinksRequestDTO } from '../../data/dto/Links/request';
// @ts-ignore
import { LinksResponseDTO } from '../../data/dto/Links/response';

const commonSchema = {
  ...dataTDO.Links.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class LinksFactory extends GenericFactory<
  LinksDO,
  LinksRequestDTO,
  LinksResponseDTO
> {}

export const linksFactory = new LinksFactory(schema, schema, responseSchema);

