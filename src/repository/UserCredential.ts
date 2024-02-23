import { EntityRepository, MongoRepository } from 'typeorm';

import { UserCredentialDO } from '../data/do/UserCredential';

@EntityRepository(UserCredentialDO)
export class UserCredentialRepository extends MongoRepository<UserCredentialDO> {}

