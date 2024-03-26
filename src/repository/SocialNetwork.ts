import { EntityRepository, MongoRepository } from 'typeorm';

import { SocialNetworkDO } from '../data/do/SocialNetwork';

@EntityRepository(SocialNetworkDO)
export class SocialNetworkRepository extends MongoRepository<SocialNetworkDO> {}

