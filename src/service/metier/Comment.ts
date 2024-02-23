import { getCustomRepository } from 'typeorm';

import { GenericSM } from '../../common/service/generic.sm';
import { CommentDO } from '../../data/do/Comment';
import { CommentRepository } from '../../repository/Comment';

export class CommentSM extends GenericSM<CommentDO, string, CommentRepository> {
}

export const commentSM = new CommentSM(getCustomRepository(CommentRepository));

