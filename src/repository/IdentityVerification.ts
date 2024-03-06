import { EntityRepository, MongoRepository } from 'typeorm';

import { IdentityVerificationDO } from '../data/do/IdentityVerification';

@EntityRepository(IdentityVerificationDO)
export class IdentityVerificationRepository extends MongoRepository<IdentityVerificationDO> {}

