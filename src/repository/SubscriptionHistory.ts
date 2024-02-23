import { EntityRepository, MongoRepository } from 'typeorm';

import { SubscriptionHistoryDO } from '../data/do/SubscriptionHistory';

@EntityRepository(SubscriptionHistoryDO)
export class SubscriptionHistoryRepository extends MongoRepository<SubscriptionHistoryDO> {}

