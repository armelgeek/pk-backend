import { EntityRepository, MongoRepository } from 'typeorm';

import { AlbumDO } from '../data/do/Album';

@EntityRepository(AlbumDO)
export class AlbumRepository extends MongoRepository<AlbumDO> {}

