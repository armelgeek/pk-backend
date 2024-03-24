import { EntityRepository, MongoRepository } from 'typeorm';

import { GaugeDO } from '../data/do/Gauge';

@EntityRepository(GaugeDO)
export class GaugeRepository extends MongoRepository<GaugeDO> {}

