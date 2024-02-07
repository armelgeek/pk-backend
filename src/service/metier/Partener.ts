import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PartenerDO } from '../../data/do/Partener';
import { PartenerRepository } from '../../repository/Partener';

export class PartenerSM extends GenericSM<PartenerDO, string, PartenerRepository> {
}

export const partenerSM = new PartenerSM(getCustomRepository(PartenerRepository));

