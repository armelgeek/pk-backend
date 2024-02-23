import { EntityRepository, MongoRepository } from 'typeorm';

import { SubscriptionOfferDO } from '../data/do/SubscriptionOffer';

@EntityRepository(SubscriptionOfferDO)
export class SubscriptionOfferRepository extends MongoRepository<SubscriptionOfferDO> {}

