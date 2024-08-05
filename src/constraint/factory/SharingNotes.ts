import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SharingNoteDO } from '../../data/do/SharingNote';
// @ts-ignore
import { SharingNoteRequestDTO } from '../../data/dto/SharingNotes/request';
// @ts-ignore
import { SharingNoteResponseDTO } from '../../data/dto/SharingNotes/response';

const commonSchema = {
  ...dataTDO.SharingNote.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class SharingNoteFactory extends GenericFactory<
  SharingNoteDO,
  SharingNoteRequestDTO,
  SharingNoteResponseDTO
> {}

export const sharingnoteFactory = new SharingNoteFactory(schema, schema, responseSchema);

