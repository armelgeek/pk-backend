import { EntityRepository, MongoRepository } from 'typeorm';

import { DonationDO } from '../data/do/Donation';

@EntityRepository(DonationDO)
export class DonationRepository extends MongoRepository<DonationDO> {}

