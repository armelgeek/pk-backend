import { EntityRepository, MongoRepository } from 'typeorm';

import { PartenariatDO } from '../data/do/Partenariat';

@EntityRepository(PartenariatDO)
export class PartenariatRepository extends MongoRepository<PartenariatDO> {}

