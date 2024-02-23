import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { TournamentTypeDO } from '../../data/do/TournamentType';
import { TournamentTypeRepository } from '../../repository/TournamentType';

export class TournamentTypeSM extends GenericSM<TournamentTypeDO, string, TournamentTypeRepository> {
}

export const tournamenttypeSM = new TournamentTypeSM(getCustomRepository(TournamentTypeRepository));

