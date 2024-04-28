import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { mediaDO } from '../../data/do/media';
// @ts-ignore
import { mediaRequestDTO } from '../../data/dto/media/request';
// @ts-ignore
import { mediaResponseDTO } from '../../data/dto/media/response';

const commonSchema = {
  ...dataTDO.media.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class mediaFactory extends GenericFactory<
  mediaDO,
  mediaRequestDTO,
  mediaResponseDTO
> {}

export const mediaFactory = new mediaFactory(schema, schema, responseSchema);

