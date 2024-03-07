import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { DayDO } from '../../data/do/Day';
import { DayRepository } from '../../repository/Day';

export class DaySM extends GenericSM<DayDO, string, DayRepository> {
}

export const daySM = new DaySM(getCustomRepository(DayRepository));

