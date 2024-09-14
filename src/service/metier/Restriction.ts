import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { RestrictionDO } from '../../data/do/Restriction';
import { RestrictionRepository } from '../../repository/Restriction';

export class RestrictionSM extends GenericSM<RestrictionDO, string, RestrictionRepository> {
}

export const restrictionSM = new RestrictionSM(getCustomRepository(RestrictionRepository));

