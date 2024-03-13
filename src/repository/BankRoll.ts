import { EntityRepository, MongoRepository } from 'typeorm';

import { BankRollDO } from '../data/do/BankRoll';

@EntityRepository(BankRollDO)
export class BankRollRepository extends MongoRepository<BankRollDO> {}

