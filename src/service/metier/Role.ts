import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { RoleDO } from '../../data/do/Role';
import { RoleRepository } from '../../repository/Role';

export class RoleSM extends GenericSM<RoleDO, string, RoleRepository> {
}

export const roleSM = new RoleSM(getCustomRepository(RoleRepository));

