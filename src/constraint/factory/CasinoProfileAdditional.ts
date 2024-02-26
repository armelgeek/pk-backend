import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { CasinoProfileAdditionalDO } from '../../data/do/CasinoProfileAdditional';
// @ts-ignore
import { CasinoProfileAdditionalRequestDTO } from '../../data/dto/CasinoProfileAdditional/request';
// @ts-ignore
import { CasinoProfileAdditionalResponseDTO } from '../../data/dto/CasinoProfileAdditional/response';

const commonSchema = {
  ...dataTDO.CasinoProfileAdditional.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class CasinoProfileAdditionalFactory extends GenericFactory<
  CasinoProfileAdditionalDO,
  CasinoProfileAdditionalRequestDTO,
  CasinoProfileAdditionalResponseDTO
> {}

export const casinoprofileadditionalFactory = new CasinoProfileAdditionalFactory(schema, schema, responseSchema);

