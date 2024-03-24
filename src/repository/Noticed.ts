import { EntityRepository, MongoRepository } from 'typeorm';

import { NoticedDO } from '../data/do/Noticed';

@EntityRepository(NoticedDO)
export class NoticedRepository extends MongoRepository<NoticedDO> {}

