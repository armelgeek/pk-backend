import { EntityRepository, MongoRepository } from 'typeorm';

import { TwoFactorAuthenticationDO } from '../data/do/TwoFactorAuthentication';

@EntityRepository(TwoFactorAuthenticationDO)
export class TwoFactorAuthenticationRepository extends MongoRepository<TwoFactorAuthenticationDO> {}

