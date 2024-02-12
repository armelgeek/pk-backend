import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PseudosDO } from '../../data/do/Pseudos';
import { PseudosRepository } from '../../repository/Pseudos';

export class PseudosSM extends GenericSM<PseudosDO, string, PseudosRepository> {
}

export const pseudosSM = new PseudosSM(getCustomRepository(PseudosRepository));

