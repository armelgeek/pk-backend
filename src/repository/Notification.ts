import { EntityRepository, MongoRepository } from 'typeorm';

import { NotificationDO } from '../data/do/Notification';

@EntityRepository(NotificationDO)
export class NotificationRepository extends MongoRepository<NotificationDO> {}

