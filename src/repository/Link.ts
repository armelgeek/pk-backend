import { EntityRepository, MongoRepository } from 'typeorm';

import { LinkDO } from '../data/do/Link';

@EntityRepository(LinkDO)
export class LinkRepository extends MongoRepository<LinkDO> {}

