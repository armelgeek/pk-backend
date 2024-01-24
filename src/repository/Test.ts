import { EntityRepository, MongoRepository } from 'typeorm';

import { TestDO } from '../data/do/Test';

@EntityRepository(TestDO)
export class TestRepository extends MongoRepository<TestDO> {}
