import { EntityRepository, MongoRepository } from 'typeorm';

import { ClubDO } from '../data/do/Club';

@EntityRepository(ClubDO)
export class ClubRepository extends MongoRepository<ClubDO> {}

