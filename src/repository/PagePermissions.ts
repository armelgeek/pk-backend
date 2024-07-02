import { EntityRepository, MongoRepository } from 'typeorm';

import { PagePermissionsDO } from '../data/do/PagePermissions';

@EntityRepository(PagePermissionsDO)
export class PagePermissionsRepository extends MongoRepository<PagePermissionsDO> {}

