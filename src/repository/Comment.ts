import { EntityRepository, MongoRepository } from 'typeorm';

import { CommentDO } from '../data/do/Comment';

@EntityRepository(CommentDO)
export class CommentRepository extends MongoRepository<CommentDO> {}

