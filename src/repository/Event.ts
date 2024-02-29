import { EntityRepository, MongoRepository } from 'typeorm';

import { EventDO } from '../data/do/Event';

@EntityRepository(EventDO)
export class EventRepository extends MongoRepository<EventDO> {}

