import { EntityRepository, MongoRepository } from 'typeorm';

import { VisitorsDO } from '../data/do/Visitors';

@EntityRepository(VisitorsDO)
export class VisitorsRepository extends MongoRepository<VisitorsDO> {}

