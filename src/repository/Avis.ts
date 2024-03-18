import { EntityRepository, MongoRepository } from 'typeorm';

import { AvisDO } from '../data/do/Avis';

@EntityRepository(AvisDO)
export class AvisRepository extends MongoRepository<AvisDO> {}

