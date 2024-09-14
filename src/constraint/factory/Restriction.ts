import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { RestrictionDO } from '../../data/do/Restriction';
// @ts-ignore
import { RestrictionRequestDTO } from '../../data/dto/Restriction/request';
// @ts-ignore
import { RestrictionResponseDTO } from '../../data/dto/Restriction/response';

const commonSchema = {
  ...dataTDO.Restriction.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class RestrictionFactory extends GenericFactory<
  RestrictionDO,
  RestrictionRequestDTO,
  RestrictionResponseDTO
> {}

export const restrictionFactory = new RestrictionFactory(schema, schema, responseSchema);

