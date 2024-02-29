import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { EventDO } from '../../data/do/Event';
import { EventRepository } from '../../repository/Event';

export class EventSM extends GenericSM<EventDO, string, EventRepository> {
}

export const eventSM = new EventSM(getCustomRepository(EventRepository));

