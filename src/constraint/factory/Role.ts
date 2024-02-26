import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { RoleDO } from '../../data/do/Role';
// @ts-ignore
import { RoleRequestDTO } from '../../data/dto/Role/request';
// @ts-ignore
import { RoleResponseDTO } from '../../data/dto/Role/response';

const commonSchema = {
  ...dataTDO.Role.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdDate: { path: 'createdDate', fn: (value) => formatDateToLocaleWithHour(value) },
};

export class RoleFactory extends GenericFactory<
  RoleDO,
  RoleRequestDTO,
  RoleResponseDTO
> {}

export const roleFactory = new RoleFactory(schema, schema, responseSchema);

