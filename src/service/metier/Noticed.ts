import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { NoticedDO } from '../../data/do/Noticed';
import { NoticedRepository } from '../../repository/Noticed';

export class NoticedSM extends GenericSM<NoticedDO, string, NoticedRepository> {
}

export const noticedSM = new NoticedSM(getCustomRepository(NoticedRepository));

