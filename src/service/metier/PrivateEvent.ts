import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { PrivateEventDO } from '../../data/do/PrivateEvent';
import { PrivateEventRepository } from '../../repository/PrivateEvent';

export class PrivateEventSM extends GenericSM<PrivateEventDO, string, PrivateEventRepository> {
}

export const privateeventSM = new PrivateEventSM(getCustomRepository(PrivateEventRepository));

