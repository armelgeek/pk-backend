import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { CasinoProfileDO } from '../../data/do/CasinoProfile';
// @ts-ignore
import { CasinoProfileRequestDTO } from '../../data/dto/CasinoProfile/request';
// @ts-ignore
import { CasinoProfileResponseDTO } from '../../data/dto/CasinoProfile/response';

const commonSchema = {
  ...dataTDO.CasinoProfile.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class CasinoProfileFactory extends GenericFactory<
  CasinoProfileDO,
  CasinoProfileRequestDTO,
  CasinoProfileResponseDTO
> {}

export const casinoprofileFactory = new CasinoProfileFactory(schema, schema, responseSchema);

