import { EntityRepository, MongoRepository } from 'typeorm';

import { ParrainageDO } from '../data/do/Parrainage';

@EntityRepository(ParrainageDO)
export class ParrainageRepository extends MongoRepository<ParrainageDO> {}

