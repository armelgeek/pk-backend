import { EntityRepository, MongoRepository } from 'typeorm';

import { PublicationDO } from '../data/do/Publication';

@EntityRepository(PublicationDO)
export class PublicationRepository extends MongoRepository<PublicationDO> {}

