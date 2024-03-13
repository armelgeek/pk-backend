import { EntityRepository, MongoRepository } from 'typeorm';

import { SessionDO } from '../data/do/Session';

@EntityRepository(SessionDO)
export class SessionRepository extends MongoRepository<SessionDO> {}

