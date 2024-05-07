import { EntityRepository, MongoRepository } from 'typeorm';

import { RegistrationDO } from '../data/do/Registration';

@EntityRepository(RegistrationDO)
export class RegistrationRepository extends MongoRepository<RegistrationDO> {}

