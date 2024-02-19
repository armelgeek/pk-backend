import { GenericController } from '../../common/infrastructure/generic.controller';
import { PrivateEventDO } from '../../data/do/PrivateEvent';
// @ts-ignore
import { PrivateEventRequestDTO } from '../../data/dto/PrivateEvent/request';
// @ts-ignore
import { PrivateEventResponseDTO } from '../../data/dto/PrivateEvent/response';
import { privateeventSA, PrivateEventSA } from '../../service/applicatif/PrivateEvent';

class PrivateEventController extends GenericController<
  PrivateEventDO,
  PrivateEventRequestDTO,
  PrivateEventResponseDTO,
  PrivateEventSA
> {}

export const privateeventController = new PrivateEventController(privateeventSA);

