import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PseudosDO } from '../../data/do/Pseudos';
// @ts-ignore
import { PseudosRequestDTO } from '../../data/dto/Pseudos/request';
// @ts-ignore
import { PseudosResponseDTO } from '../../data/dto/Pseudos/response';

const commonSchema = {
  ...dataTDO.Pseudos.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class PseudosFactory extends GenericFactory<
  PseudosDO,
  PseudosRequestDTO,
  PseudosResponseDTO
> {}

export const pseudosFactory = new PseudosFactory(schema, schema, responseSchema);

