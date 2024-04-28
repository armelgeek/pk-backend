import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { MediasDO } from '../../data/do/Medias';
// @ts-ignore
import { MediasRequestDTO } from '../../data/dto/Medias/request';
// @ts-ignore
import { MediasResponseDTO } from '../../data/dto/Medias/response';

const commonSchema = {
  ...dataTDO.Medias.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class MediasFactory extends GenericFactory<
  MediasDO,
  MediasRequestDTO,
  MediasResponseDTO
> {}

export const mediasFactory = new MediasFactory(schema, schema, responseSchema);

