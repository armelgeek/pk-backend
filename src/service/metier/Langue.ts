import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { LangueDO } from '../../data/do/Langue';
import { LangueRepository } from '../../repository/Langue';

export class LangueSM extends GenericSM<LangueDO, string, LangueRepository> {
}

export const langueSM = new LangueSM(getCustomRepository(LangueRepository));

