import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { TwoFactorAuthenticationDO } from '../../data/do/TwoFactorAuthentication';
// @ts-ignore
import { TwoFactorAuthenticationRequestDTO } from '../../data/dto/TwoFactorAuthentication/request';
// @ts-ignore
import { TwoFactorAuthenticationResponseDTO } from '../../data/dto/TwoFactorAuthentication/response';

const commonSchema = {
  ...dataTDO.TwoFactorAuthentication.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class TwoFactorAuthenticationFactory extends GenericFactory<
  TwoFactorAuthenticationDO,
  TwoFactorAuthenticationRequestDTO,
  TwoFactorAuthenticationResponseDTO
> {}

export const twofactorauthenticationFactory = new TwoFactorAuthenticationFactory(schema, schema, responseSchema);

