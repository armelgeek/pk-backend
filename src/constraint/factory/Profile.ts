import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { ProfileDO } from '../../data/do/Profile';
// @ts-ignore
import { ProfileRequestDTO } from '../../data/dto/Profile/request';
// @ts-ignore
import { ProfileResponseDTO } from '../../data/dto/Profile/response';

const commonSchema = {
  ...dataTDO.Profile.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  dateCreation: { path: 'dateCreation', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class ProfileFactory extends GenericFactory<
  ProfileDO,
  ProfileRequestDTO,
  ProfileResponseDTO
> {}

export const profileFactory = new ProfileFactory(schema, schema, responseSchema);

