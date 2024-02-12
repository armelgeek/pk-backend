import { EntityRepository, MongoRepository } from 'typeorm';

import { ProfileDO } from '../data/do/Profile';

@EntityRepository(ProfileDO)
export class ProfileRepository extends MongoRepository<ProfileDO> {}

