import { EntityRepository, MongoRepository } from 'typeorm';

import { ReportDO } from '../data/do/Report';

@EntityRepository(ReportDO)
export class ReportRepository extends MongoRepository<ReportDO> {}

