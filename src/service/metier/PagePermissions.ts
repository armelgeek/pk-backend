import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PagePermissionsDO } from '../../data/do/PagePermissions';
import { PagePermissionsRepository } from '../../repository/PagePermissions';

export class PagePermissionsSM extends GenericSM<PagePermissionsDO, string, PagePermissionsRepository> {
}

export const pagepermissionsSM = new PagePermissionsSM(getCustomRepository(PagePermissionsRepository));

