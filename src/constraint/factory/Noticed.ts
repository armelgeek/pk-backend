import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { NoticedDO } from '../../data/do/Noticed';
// @ts-ignore
import { NoticedRequestDTO } from '../../data/dto/Noticed/request';
// @ts-ignore
import { NoticedResponseDTO } from '../../data/dto/Noticed/response';

const commonSchema = {
  ...dataTDO.Noticed.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class NoticedFactory extends GenericFactory<
  NoticedDO,
  NoticedRequestDTO,
  NoticedResponseDTO
> {}

export const noticedFactory = new NoticedFactory(schema, schema, responseSchema);

