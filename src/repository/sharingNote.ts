import { EntityRepository, MongoRepository } from 'typeorm';

import { sharingNoteDO } from '../data/do/sharingNote';

@EntityRepository(sharingNoteDO)
export class sharingNoteRepository extends MongoRepository<sharingNoteDO> {}

