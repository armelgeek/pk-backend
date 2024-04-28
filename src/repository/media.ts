import { EntityRepository, MongoRepository } from 'typeorm';

import { mediaDO } from '../data/do/media';

@EntityRepository(mediaDO)
export class mediaRepository extends MongoRepository<mediaDO> {}

