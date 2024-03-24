import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { NoteValueDO } from '../../data/do/NoteValue';
// @ts-ignore
import { NoteValueRequestDTO } from '../../data/dto/NoteValue/request';
// @ts-ignore
import { NoteValueResponseDTO } from '../../data/dto/NoteValue/response';

const commonSchema = {
  ...dataTDO.NoteValue.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class NoteValueFactory extends GenericFactory<
  NoteValueDO,
  NoteValueRequestDTO,
  NoteValueResponseDTO
> {}

export const notevalueFactory = new NoteValueFactory(schema, schema, responseSchema);

