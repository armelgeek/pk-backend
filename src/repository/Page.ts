import { EntityRepository, MongoRepository } from 'typeorm';

import { PageDO } from '../data/do/Page';

@EntityRepository(PageDO)
export class PageRepository extends MongoRepository<PageDO> {}

