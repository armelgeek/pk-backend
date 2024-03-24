import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { GaugeDO } from '../../data/do/Gauge';
// @ts-ignore
import { GaugeRequestDTO } from '../../data/dto/Gauge/request';
// @ts-ignore
import { GaugeResponseDTO } from '../../data/dto/Gauge/response';

const commonSchema = {
  ...dataTDO.Gauge.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class GaugeFactory extends GenericFactory<
  GaugeDO,
  GaugeRequestDTO,
  GaugeResponseDTO
> {}

export const gaugeFactory = new GaugeFactory(schema, schema, responseSchema);

