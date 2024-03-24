import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { NoteDO } from '../../data/do/Note';
// @ts-ignore
import { NoteRequestDTO } from '../../data/dto/Note/request';
// @ts-ignore
import { NoteResponseDTO } from '../../data/dto/Note/response';

const commonSchema = {
  ...dataTDO.Note.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class NoteFactory extends GenericFactory<
  NoteDO,
  NoteRequestDTO,
  NoteResponseDTO
> {}

export const noteFactory = new NoteFactory(schema, schema, responseSchema);

