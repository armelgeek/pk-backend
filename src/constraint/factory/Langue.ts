import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { LangueDO } from '../../data/do/Langue';
// @ts-ignore
import { LangueRequestDTO } from '../../data/dto/Langue/request';
// @ts-ignore
import { LangueResponseDTO } from '../../data/dto/Langue/response';

const commonSchema = {
  ...dataTDO.Langue.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class LangueFactory extends GenericFactory<
  LangueDO,
  LangueRequestDTO,
  LangueResponseDTO
> {}

export const langueFactory = new LangueFactory(schema, schema, responseSchema);

