import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { sharingNoteDO } from '../../data/do/sharingNote';
// @ts-ignore
import { sharingNoteRequestDTO } from '../../data/dto/sharingNote/request';
// @ts-ignore
import { sharingNoteResponseDTO } from '../../data/dto/sharingNote/response';

const commonSchema = {
  ...dataTDO.sharingNote.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class sharingNoteFactory extends GenericFactory<
  sharingNoteDO,
  sharingNoteRequestDTO,
  sharingNoteResponseDTO
> {}

export const sharingnoteFactory = new sharingNoteFactory(schema, schema, responseSchema);

