import { GenericSA } from '../../common/service/generic.sa';
import {
    eventFactory,
  EventFactory,
} from '../../constraint/factory/Event';
import { EventDO } from '../../data/do/Event';
// @ts-ignore
import { EventRequestDTO } from '../../data/dto/Event1/request';
// @ts-ignore
import { EventResponseDTO } from '../../data/dto/Event1/response';
import { eventSM, EventSM } from '../metier/Event';

export class EventSA extends GenericSA<
  EventDO,
  EventRequestDTO,
  EventResponseDTO,
  EventSM,
  EventFactory
> {
}

export const eventSA = new EventSA(eventSM, eventFactory, 'Event');

