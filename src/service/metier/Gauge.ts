import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { GaugeDO } from '../../data/do/Gauge';
import { GaugeRepository } from '../../repository/Gauge';

export class GaugeSM extends GenericSM<GaugeDO, string, GaugeRepository> {
}

export const gaugeSM = new GaugeSM(getCustomRepository(GaugeRepository));

