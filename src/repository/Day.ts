import { EntityRepository, MongoRepository } from 'typeorm';

import { DayDO } from '../data/do/Day';

@EntityRepository(DayDO)
export class DayRepository extends MongoRepository<DayDO> {}

