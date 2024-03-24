import { EntityRepository, MongoRepository } from 'typeorm';

import { NoteDO } from '../data/do/Note';

@EntityRepository(NoteDO)
export class NoteRepository extends MongoRepository<NoteDO> {}

