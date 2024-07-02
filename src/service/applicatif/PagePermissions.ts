import { GenericSA } from '../../common/service/generic.sa';
import {
    pagepermissionsFactory,
  PagePermissionsFactory,
} from '../../constraint/factory/PagePermissions';
import { PagePermissionsDO } from '../../data/do/PagePermissions';
// @ts-ignore
import { PagePermissionsRequestDTO } from '../../data/dto/PagePermissions/request';
// @ts-ignore
import { PagePermissionsResponseDTO } from '../../data/dto/PagePermissions/response';
import { pagepermissionsSM, PagePermissionsSM } from '../metier/PagePermissions';

export class PagePermissionsSA extends GenericSA<
  PagePermissionsDO,
  PagePermissionsRequestDTO,
  PagePermissionsResponseDTO,
  PagePermissionsSM,
  PagePermissionsFactory
> {
}

export const pagepermissionsSA = new PagePermissionsSA(pagepermissionsSM, pagepermissionsFactory, 'PagePermissions');

