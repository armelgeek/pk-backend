import { EntityRepository, MongoRepository } from 'typeorm';

import { PseudosDO } from '../data/do/Pseudos';

@EntityRepository(PseudosDO)
export class PseudosRepository extends MongoRepository<PseudosDO> {}

