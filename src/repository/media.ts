import { EntityRepository, MongoRepository } from 'typeorm';

import { MediaDO } from '../data/do/Media';

@EntityRepository(MediaDO)
export class MediaRepository extends MongoRepository<MediaDO> {}

