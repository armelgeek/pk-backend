import { EntityRepository, MongoRepository } from 'typeorm';

import { SoftbanDO } from '../data/do/Softban';

@EntityRepository(SoftbanDO)
export class SoftbanRepository extends MongoRepository<SoftbanDO> {}

