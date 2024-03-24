import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { StrategyDO } from '../../data/do/Strategy';
// @ts-ignore
import { StrategyRequestDTO } from '../../data/dto/Strategy/request';
// @ts-ignore
import { StrategyResponseDTO } from '../../data/dto/Strategy/response';

const commonSchema = {
  ...dataTDO.Strategy.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class StrategyFactory extends GenericFactory<
  StrategyDO,
  StrategyRequestDTO,
  StrategyResponseDTO
> {}

export const strategyFactory = new StrategyFactory(schema, schema, responseSchema);

