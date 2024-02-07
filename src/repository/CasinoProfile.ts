import { EntityRepository, MongoRepository } from 'typeorm';

import { CasinoProfileDO } from '../data/do/CasinoProfile';

@EntityRepository(CasinoProfileDO)
export class CasinoProfileRepository extends MongoRepository<CasinoProfileDO> {}

