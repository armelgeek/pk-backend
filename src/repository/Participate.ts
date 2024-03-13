import { EntityRepository, MongoRepository } from 'typeorm';

import { ParticipateDO } from '../data/do/Participate';

@EntityRepository(ParticipateDO)
export class ParticipateRepository extends MongoRepository<ParticipateDO> {}

