import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { MessageDO } from '../../data/do/Message';
import { MessageRepository } from '../../repository/Message';

export class MessageSM extends GenericSM<MessageDO, string, MessageRepository> {
}

export const messageSM = new MessageSM(getCustomRepository(MessageRepository));

