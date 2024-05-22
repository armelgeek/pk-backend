import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { VisitorsDO } from '../../data/do/Visitors';
// @ts-ignore
import { VisitorsRequestDTO } from '../../data/dto/Visitors/request';
// @ts-ignore
import { VisitorsResponseDTO } from '../../data/dto/Visitors/response';

const commonSchema = {
  ...dataTDO.Visitors.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class VisitorsFactory extends GenericFactory<
  VisitorsDO,
  VisitorsRequestDTO,
  VisitorsResponseDTO
> {}

export const visitorsFactory = new VisitorsFactory(schema, schema, responseSchema);

