import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { RegistrationDO } from '../../data/do/Registration';
// @ts-ignore
import { RegistrationRequestDTO } from '../../data/dto/Registration/request';
// @ts-ignore
import { RegistrationResponseDTO } from '../../data/dto/Registration/response';

const commonSchema = {
  ...dataTDO.Registration.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class RegistrationFactory extends GenericFactory<
  RegistrationDO,
  RegistrationRequestDTO,
  RegistrationResponseDTO
> {}

export const registrationFactory = new RegistrationFactory(schema, schema, responseSchema);

