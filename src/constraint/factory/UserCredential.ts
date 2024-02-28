import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { UserCredentialDO } from '../../data/do/UserCredential';
// @ts-ignore
import { UserCredentialRequestDTO } from '../../data/dto/UserCredential/request';
// @ts-ignore
import { UserCredentialResponseDTO } from '../../data/dto/UserCredential/response';

const commonSchema = {
  ...dataTDO.UserCredential.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class UserCredentialFactory extends GenericFactory<
  UserCredentialDO,
  UserCredentialRequestDTO,
  UserCredentialResponseDTO
> {}

export const usercredentialFactory = new UserCredentialFactory(schema, schema, responseSchema);

