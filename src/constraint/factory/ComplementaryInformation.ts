import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ComplementaryInformationDO } from '../../data/do/ComplementaryInformation';
// @ts-ignore
import { ComplementaryInformationRequestDTO } from '../../data/dto/ComplementaryInformation/request';
// @ts-ignore
import { ComplementaryInformationResponseDTO } from '../../data/dto/ComplementaryInformation/response';

const commonSchema = {
  ...dataTDO.ComplementaryInformation.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class ComplementaryInformationFactory extends GenericFactory<
  ComplementaryInformationDO,
  ComplementaryInformationRequestDTO,
  ComplementaryInformationResponseDTO
> {}

export const complementaryinformationFactory = new ComplementaryInformationFactory(schema, schema, responseSchema);

