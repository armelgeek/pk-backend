import { EntityRepository, MongoRepository } from 'typeorm';

import { LevelDO } from '../data/do/Level';

@EntityRepository(LevelDO)
export class LevelRepository extends MongoRepository<LevelDO> {}

