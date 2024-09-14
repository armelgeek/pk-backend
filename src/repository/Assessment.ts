import { EntityRepository, MongoRepository } from 'typeorm';

import { AssessmentDO } from '../data/do/Assessment';

@EntityRepository(AssessmentDO)
export class AssessmentRepository extends MongoRepository<AssessmentDO> {}

