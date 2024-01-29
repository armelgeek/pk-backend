import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ParrainageDO } from '../../data/do/Parrainage';
import { ParrainageRepository } from '../../repository/Parrainage';

export class ParrainageSM extends GenericSM<ParrainageDO, string, ParrainageRepository> {
}

export const parrainageSM = new ParrainageSM(getCustomRepository(ParrainageRepository));

