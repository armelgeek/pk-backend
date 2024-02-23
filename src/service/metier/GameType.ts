import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { GameTypeDO } from '../../data/do/GameType';
import { GameTypeRepository } from '../../repository/GameType';

export class GameTypeSM extends GenericSM<GameTypeDO, string, GameTypeRepository> {
}

export const gametypeSM = new GameTypeSM(getCustomRepository(GameTypeRepository));

