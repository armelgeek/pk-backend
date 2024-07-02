import { GenericController } from '../../common/infrastructure/generic.controller';
import { PagePermissionsDO } from '../../data/do/PagePermissions';
// @ts-ignore
import { PagePermissionsRequestDTO } from '../../data/dto/PagePermissions/request';
// @ts-ignore
import { PagePermissionsResponseDTO } from '../../data/dto/PagePermissions/response';
import { pagepermissionsSA, PagePermissionsSA } from '../../service/applicatif/PagePermissions';

class PagePermissionsController extends GenericController<
  PagePermissionsDO,
  PagePermissionsRequestDTO,
  PagePermissionsResponseDTO,
  PagePermissionsSA
> {}

export const pagepermissionsController = new PagePermissionsController(pagepermissionsSA);

