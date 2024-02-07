import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { CasinoProfileDO } from '../../data/do/CasinoProfile';
import { CasinoProfileRepository } from '../../repository/CasinoProfile';

export class CasinoProfileSM extends GenericSM<CasinoProfileDO, string, CasinoProfileRepository> {
}

export const casinoprofileSM = new CasinoProfileSM(getCustomRepository(CasinoProfileRepository));

