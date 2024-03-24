import { EntityRepository, MongoRepository } from 'typeorm';

import { NoteValueDO } from '../data/do/NoteValue';

@EntityRepository(NoteValueDO)
export class NoteValueRepository extends MongoRepository<NoteValueDO> {}

