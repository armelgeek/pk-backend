import { EntityRepository, MongoRepository } from 'typeorm';

import { StrategyDO } from '../data/do/Strategy';

@EntityRepository(StrategyDO)
export class StrategyRepository extends MongoRepository<StrategyDO> {}

