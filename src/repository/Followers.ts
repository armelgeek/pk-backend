import { EntityRepository, MongoRepository } from 'typeorm';

import { FollowersDO } from '../data/do/Followers';

@EntityRepository(FollowersDO)
export class FollowersRepository extends MongoRepository<FollowersDO> {}

