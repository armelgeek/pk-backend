import { EntityRepository, MongoRepository } from 'typeorm';

import { PartenerDO } from '../data/do/Partener';

@EntityRepository(PartenerDO)
export class PartenerRepository extends MongoRepository<PartenerDO> {}

