import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { FilterDO } from '../../data/do/Filter';
// @ts-ignore
import { FilterRequestDTO } from '../../data/dto/Filter/request';
// @ts-ignore
import { FilterResponseDTO } from '../../data/dto/Filter/response';

const commonSchema = {
  ...dataTDO.Filter.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class FilterFactory extends GenericFactory<
  FilterDO,
  FilterRequestDTO,
  FilterResponseDTO
> {}

export const filterFactory = new FilterFactory(schema, schema, responseSchema);

