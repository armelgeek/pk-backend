import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { LevelDO } from '../../data/do/Level';
import { LevelRepository } from '../../repository/Level';

export class LevelSM extends GenericSM<LevelDO, string, LevelRepository> {
}

export const levelSM = new LevelSM(getCustomRepository(LevelRepository));

