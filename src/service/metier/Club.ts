import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { ClubDO } from '../../data/do/Club';
import { ClubRepository } from '../../repository/Club';

export class ClubSM extends GenericSM<ClubDO, string, ClubRepository> {
}

export const clubSM = new ClubSM(getCustomRepository(ClubRepository));

