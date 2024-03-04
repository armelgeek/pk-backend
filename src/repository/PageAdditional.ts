import { EntityRepository, MongoRepository } from 'typeorm';

import { PageAdditionalDO } from '../data/do/PageAdditional';

@EntityRepository(PageAdditionalDO)
export class PageAdditionalRepository extends MongoRepository<PageAdditionalDO> {}

