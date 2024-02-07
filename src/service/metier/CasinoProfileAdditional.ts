import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { CasinoProfileAdditionalDO } from '../../data/do/CasinoProfileAdditional';
import { CasinoProfileAdditionalRepository } from '../../repository/CasinoProfileAdditional';

export class CasinoProfileAdditionalSM extends GenericSM<CasinoProfileAdditionalDO, string, CasinoProfileAdditionalRepository> {
}

export const casinoprofileadditionalSM = new CasinoProfileAdditionalSM(getCustomRepository(CasinoProfileAdditionalRepository));

