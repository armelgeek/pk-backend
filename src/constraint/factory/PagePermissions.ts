import { GenericFactory } from '../../common/constraint/factory/generic.factory';
import { formatDateToLocaleWithHour } from '../../common/service/date.service';
import { dataTDO } from '../../data';
import { PagePermissionsDO } from '../../data/do/PagePermissions';
// @ts-ignore
import { PagePermissionsRequestDTO } from '../../data/dto/PagePermissions/request';
// @ts-ignore
import { PagePermissionsResponseDTO } from '../../data/dto/PagePermissions/response';

const commonSchema = {
  ...dataTDO.PagePermissions.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
  ...commonSchema,
  id: '_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export class PagePermissionsFactory extends GenericFactory<
  PagePermissionsDO,
  PagePermissionsRequestDTO,
  PagePermissionsResponseDTO
> {}

export const pagepermissionsFactory = new PagePermissionsFactory(schema, schema, responseSchema);

