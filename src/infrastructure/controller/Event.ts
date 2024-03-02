import { GenericController } from '../../common/infrastructure/generic.controller';
import { EventDO } from '../../data/do/Event';
// @ts-ignore
import { EventRequestDTO } from '../../data/dto/Event1/request';
// @ts-ignore
import { EventResponseDTO } from '../../data/dto/Event1/response';
import { eventSA, EventSA } from '../../service/applicatif/Event';

class EventController extends GenericController<
  EventDO,
  EventRequestDTO,
  EventResponseDTO,
  EventSA
> {}

export const eventController = new EventController(eventSA);

