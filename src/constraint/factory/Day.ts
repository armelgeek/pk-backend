import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { DayDO } from '../../data/do/Day';
// @ts-ignore
import { DayRequestDTO } from '../../data/dto/Day/request';
// @ts-ignore
import { DayResponseDTO } from '../../data/dto/Day/response';

const commonSchema = {
  ...dataTDO.Day.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class DayFactory extends GenericFactory<
  DayDO,
  DayRequestDTO,
  DayResponseDTO
> {}

export const dayFactory = new DayFactory(schema, schema, responseSchema);

