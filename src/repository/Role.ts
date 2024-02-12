import { EntityRepository, MongoRepository } from 'typeorm';

import { RoleDO } from '../data/do/Role';

@EntityRepository(RoleDO)
export class RoleRepository extends MongoRepository<RoleDO> {}

