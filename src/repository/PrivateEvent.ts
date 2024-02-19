import { EntityRepository, MongoRepository } from 'typeorm';

import { PrivateEventDO } from '../data/do/PrivateEvent';

@EntityRepository(PrivateEventDO)
export class PrivateEventRepository extends MongoRepository<PrivateEventDO> {}

