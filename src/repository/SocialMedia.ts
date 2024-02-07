import { EntityRepository, MongoRepository } from 'typeorm';

import { SocialMediaDO } from '../data/do/SocialMedia';

@EntityRepository(SocialMediaDO)
export class SocialMediaRepository extends MongoRepository<SocialMediaDO> {}

