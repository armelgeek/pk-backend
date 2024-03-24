import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { StrategyDO } from '../../data/do/Strategy';
import { StrategyRepository } from '../../repository/Strategy';

export class StrategySM extends GenericSM<StrategyDO, string, StrategyRepository> {
}

export const strategySM = new StrategySM(getCustomRepository(StrategyRepository));

