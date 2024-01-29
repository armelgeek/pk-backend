import { GenericController } from '../../common/infrastructure/generic.controller';
import { MessageDO } from '../../data/do/Message';
// @ts-ignore
import { MessageRequestDTO } from '../../data/dto/Message/request';
// @ts-ignore
import { MessageResponseDTO } from '../../data/dto/Message/response';
import { messageSA, MessageSA } from '../../service/applicatif/Message';

class MessageController extends GenericController<
  MessageDO,
  MessageRequestDTO,
  MessageResponseDTO,
  MessageSA
> {}

export const messageController = new MessageController(messageSA);

