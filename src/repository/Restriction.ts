import { EntityRepository, MongoRepository } from 'typeorm';

import { RestrictionDO } from '../data/do/Restriction';

@EntityRepository(RestrictionDO)
export class RestrictionRepository extends MongoRepository<RestrictionDO> {}

