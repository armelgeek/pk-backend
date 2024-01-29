import { EntityRepository, MongoRepository } from 'typeorm';

import { MessageDO } from '../data/do/Message';

@EntityRepository(MessageDO)
export class MessageRepository extends MongoRepository<MessageDO> {}

