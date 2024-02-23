import { EntityRepository, MongoRepository } from 'typeorm';

import { PaymentTypeDO } from '../data/do/PaymentType';

@EntityRepository(PaymentTypeDO)
export class PaymentTypeRepository extends MongoRepository<PaymentTypeDO> {}

