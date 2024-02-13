import { EntityRepository, MongoRepository } from 'typeorm';

import { PseudoDO } from '../data/do/Pseudo';

@EntityRepository(PseudoDO)
export class PseudoRepository extends MongoRepository<PseudoDO> {}

