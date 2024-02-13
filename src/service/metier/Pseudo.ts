import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PseudoDO } from '../../data/do/Pseudo';
import { PseudoRepository } from '../../repository/Pseudo';

export class PseudoSM extends GenericSM<PseudoDO, string, PseudoRepository> {
}

export const pseudoSM = new PseudoSM(getCustomRepository(PseudoRepository));

