import { EntityRepository, MongoRepository } from 'typeorm';

import { SharingNoteDO } from '../data/do/SharingNote';

@EntityRepository(SharingNoteDO)
export class SharingNoteRepository extends MongoRepository<SharingNoteDO> {}

