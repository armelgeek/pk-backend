import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { BaseInformationDO } from '../../data/do/BaseInformation';
// @ts-ignore
import { BaseInformationRequestDTO } from '../../data/dto/BaseInformation/request';
// @ts-ignore
import { BaseInformationResponseDTO } from '../../data/dto/BaseInformation/response';

const commonSchema = {
  ...dataTDO.BaseInformation.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class BaseInformationFactory extends GenericFactory<
  BaseInformationDO,
  BaseInformationRequestDTO,
  BaseInformationResponseDTO
> {}

export const baseinformationFactory = new BaseInformationFactory(schema, schema, responseSchema);

