import { EntityRepository, MongoRepository } from 'typeorm';

import { UserSubscriptionDO } from '../data/do/UserSubscription';

@EntityRepository(UserSubscriptionDO)
export class UserSubscriptionRepository extends MongoRepository<UserSubscriptionDO> {}

