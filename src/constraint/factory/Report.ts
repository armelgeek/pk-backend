import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ReportDO } from '../../data/do/Report';
// @ts-ignore
import { ReportRequestDTO } from '../../data/dto/Report/request';
// @ts-ignore
import { ReportResponseDTO } from '../../data/dto/Report/response';

const commonSchema = {
  ...dataTDO.Report.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class ReportFactory extends GenericFactory<
  ReportDO,
  ReportRequestDTO,
  ReportResponseDTO
> {}

export const reportFactory = new ReportFactory(schema, schema, responseSchema);

