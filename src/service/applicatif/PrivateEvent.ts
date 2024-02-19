import { GenericSA } from '../../common/service/generic.sa';
import {
    privateeventFactory,
  PrivateEventFactory,
} from '../../constraint/factory/PrivateEvent';
import { PrivateEventDO } from '../../data/do/PrivateEvent';
// @ts-ignore
import { PrivateEventRequestDTO } from '../../data/dto/PrivateEvent/request';
// @ts-ignore
import { PrivateEventResponseDTO } from '../../data/dto/PrivateEvent/response';
import { privateeventSM, PrivateEventSM } from '../metier/PrivateEvent';

export class PrivateEventSA extends GenericSA<
  PrivateEventDO,
  PrivateEventRequestDTO,
  PrivateEventResponseDTO,
  PrivateEventSM,
  PrivateEventFactory
> {
}

export const privateeventSA = new PrivateEventSA(privateeventSM, privateeventFactory, 'PrivateEvent');

