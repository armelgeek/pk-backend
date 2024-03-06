import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { CodeParrainDO } from '../../data/do/CodeParrain';
// @ts-ignore
import { CodeParrainRequestDTO } from '../../data/dto/CodeParrain/request';
// @ts-ignore
import { CodeParrainResponseDTO } from '../../data/dto/CodeParrain/response';

const commonSchema = {
  ...dataTDO.CodeParrain.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class CodeParrainFactory extends GenericFactory<
  CodeParrainDO,
  CodeParrainRequestDTO,
  CodeParrainResponseDTO
> {}

export const codeparrainFactory = new CodeParrainFactory(schema, schema, responseSchema);

