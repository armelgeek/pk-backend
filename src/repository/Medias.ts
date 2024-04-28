import { EntityRepository, MongoRepository } from 'typeorm';

import { MediasDO } from '../data/do/Medias';

@EntityRepository(MediasDO)
export class MediasRepository extends MongoRepository<MediasDO> {}

