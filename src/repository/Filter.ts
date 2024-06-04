import { EntityRepository, MongoRepository } from 'typeorm';

import { FilterDO } from '../data/do/Filter';

@EntityRepository(FilterDO)
export class FilterRepository extends MongoRepository<FilterDO> {}

