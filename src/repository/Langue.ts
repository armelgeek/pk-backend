import { EntityRepository, MongoRepository } from 'typeorm';

import { LangueDO } from '../data/do/Langue';

@EntityRepository(LangueDO)
export class LangueRepository extends MongoRepository<LangueDO> {}

