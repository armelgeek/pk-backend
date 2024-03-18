import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { AvisDO } from '../../data/do/Avis';
import { AvisRepository } from '../../repository/Avis';

export class AvisSM extends GenericSM<AvisDO, string, AvisRepository> {
}

export const avisSM = new AvisSM(getCustomRepository(AvisRepository));

