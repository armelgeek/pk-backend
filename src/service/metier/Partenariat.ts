import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PartenariatDO } from '../../data/do/Partenariat';
import { PartenariatRepository } from '../../repository/Partenariat';

export class PartenariatSM extends GenericSM<PartenariatDO, string, PartenariatRepository> {
}

export const partenariatSM = new PartenariatSM(getCustomRepository(PartenariatRepository));

