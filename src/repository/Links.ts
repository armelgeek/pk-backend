import { EntityRepository, MongoRepository } from 'typeorm';

import { LinksDO } from '../data/do/Links';

@EntityRepository(LinksDO)
export class LinksRepository extends MongoRepository<LinksDO> {}

