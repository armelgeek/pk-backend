import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { MediaDO } from '../../data/do/Media';
// @ts-ignore
import { MediaRequestDTO } from '../../data/dto/Media/request';
// @ts-ignore
import { MediaResponseDTO } from '../../data/dto/Media/response';

const commonSchema = {
  ...dataTDO.Media.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class MediaFactory extends GenericFactory<
  MediaDO,
  MediaRequestDTO,
  MediaResponseDTO
> {}

export const mediaFactory = new MediaFactory(schema, schema, responseSchema);

