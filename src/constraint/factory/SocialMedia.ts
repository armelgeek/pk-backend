import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { SocialMediaDO } from '../../data/do/SocialMedia';
// @ts-ignore
import { SocialMediaRequestDTO } from '../../data/dto/SocialMedia/request';
// @ts-ignore
import { SocialMediaResponseDTO } from '../../data/dto/SocialMedia/response';

const commonSchema = {
  ...dataTDO.SocialMedia.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class SocialMediaFactory extends GenericFactory<
  SocialMediaDO,
  SocialMediaRequestDTO,
  SocialMediaResponseDTO
> {}

export const socialmediaFactory = new SocialMediaFactory(schema, schema, responseSchema);

