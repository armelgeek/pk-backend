import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ParrainageDO } from '../../data/do/Parrainage';
// @ts-ignore
import { ParrainageRequestDTO } from '../../data/dto/Parrainage/request';
// @ts-ignore
import { ParrainageResponseDTO } from '../../data/dto/Parrainage/response';

const commonSchema = {
  ...dataTDO.Parrainage.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class ParrainageFactory extends GenericFactory<
  ParrainageDO,
  ParrainageRequestDTO,
  ParrainageResponseDTO
> {}

export const parrainageFactory = new ParrainageFactory(schema, schema, responseSchema);

