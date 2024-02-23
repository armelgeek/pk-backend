import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ConfindialityDO } from '../../data/do/Confindiality';
// @ts-ignore
import { ConfindialityRequestDTO } from '../../data/dto/Confindiality/request';
// @ts-ignore
import { ConfindialityResponseDTO } from '../../data/dto/Confindiality/response';

const commonSchema = {
  ...dataTDO.Confindiality.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class ConfindialityFactory extends GenericFactory<
  ConfindialityDO,
  ConfindialityRequestDTO,
  ConfindialityResponseDTO
> {}

export const confindialityFactory = new ConfindialityFactory(schema, schema, responseSchema);

