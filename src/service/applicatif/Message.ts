import { GenericSA } from '../../common/service/generic.sa';
import {
    messageFactory,
  MessageFactory,
} from '../../constraint/factory/Message';
import { MessageDO } from '../../data/do/Message';
// @ts-ignore
import { MessageRequestDTO } from '../../data/dto/Message/request';
// @ts-ignore
import { MessageResponseDTO } from '../../data/dto/Message/response';
import { messageSM, MessageSM } from '../metier/Message';

export class MessageSA extends GenericSA<
  MessageDO,
  MessageRequestDTO,
  MessageResponseDTO,
  MessageSM,
  MessageFactory
> {
}

export const messageSA = new MessageSA(messageSM, messageFactory, 'Message');

