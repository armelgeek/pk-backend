import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ParticipateDO } from '../../data/do/Participate';
import { ParticipateRepository } from '../../repository/Participate';

export class ParticipateSM extends GenericSM<ParticipateDO, string, ParticipateRepository> {
}

export const participateSM = new ParticipateSM(getCustomRepository(ParticipateRepository));

