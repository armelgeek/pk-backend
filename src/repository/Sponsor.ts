import { EntityRepository, MongoRepository } from 'typeorm';

import { SponsorDO } from '../data/do/Sponsor';

@EntityRepository(SponsorDO)
export class SponsorRepository extends MongoRepository<SponsorDO> {}

