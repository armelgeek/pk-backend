import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PartenerDO } from '../../data/do/Partener';
// @ts-ignore
import { PartenerRequestDTO } from '../../data/dto/Partener/request';
// @ts-ignore
import { PartenerResponseDTO } from '../../data/dto/Partener/response';

const commonSchema = {
  ...dataTDO.Partener.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class PartenerFactory extends GenericFactory<
  PartenerDO,
  PartenerRequestDTO,
  PartenerResponseDTO
> {}

export const partenerFactory = new PartenerFactory(schema, schema, responseSchema);

