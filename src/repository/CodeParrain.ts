import { EntityRepository, MongoRepository } from 'typeorm';

import { CodeParrainDO } from '../data/do/CodeParrain';

@EntityRepository(CodeParrainDO)
export class CodeParrainRepository extends MongoRepository<CodeParrainDO> {}

