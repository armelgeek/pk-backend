import { EntityRepository, MongoRepository } from 'typeorm';

import { BlockingDO } from '../data/do/Blocking';

@EntityRepository(BlockingDO)
export class BlockingRepository extends MongoRepository<BlockingDO> {}

