import { EntityRepository, MongoRepository } from 'typeorm';

import { CasinoProfileAdditionalDO } from '../data/do/CasinoProfileAdditional';

@EntityRepository(CasinoProfileAdditionalDO)
export class CasinoProfileAdditionalRepository extends MongoRepository<CasinoProfileAdditionalDO> {}

