import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { IdentityVerificationDO } from '../../data/do/IdentityVerification';
// @ts-ignore
import { IdentityVerificationRequestDTO } from '../../data/dto/IdentityVerification/request';
// @ts-ignore
import { IdentityVerificationResponseDTO } from '../../data/dto/IdentityVerification/response';

const commonSchema = {
  ...dataTDO.IdentityVerification.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class IdentityVerificationFactory extends GenericFactory<
  IdentityVerificationDO,
  IdentityVerificationRequestDTO,
  IdentityVerificationResponseDTO
> {}

export const identityverificationFactory = new IdentityVerificationFactory(schema, schema, responseSchema);

