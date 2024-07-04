import { EntityRepository, MongoRepository } from 'typeorm';

import { FriendsDO } from '../data/do/Friends';

@EntityRepository(FriendsDO)
export class FriendsRepository extends MongoRepository<FriendsDO> {}

