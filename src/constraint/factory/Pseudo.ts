import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PseudoDO } from '../../data/do/Pseudo';
// @ts-ignore
import { PseudoRequestDTO } from '../../data/dto/Pseudo/request';
// @ts-ignore
import { PseudoResponseDTO } from '../../data/dto/Pseudo/response';

const commonSchema = {
  ...dataTDO.Pseudo.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class PseudoFactory extends GenericFactory<
  PseudoDO,
  PseudoRequestDTO,
  PseudoResponseDTO
> {}

export const pseudoFactory = new PseudoFactory(schema, schema, responseSchema);

