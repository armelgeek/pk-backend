import { GenericSA } from '../../common/service/generic.sa';
import {
    commentFactory,
  CommentFactory,
} from '../../constraint/factory/Comment';
import { CommentDO } from '../../data/do/Comment';
// @ts-ignore
import { CommentRequestDTO } from '../../data/dto/Comment/request';
// @ts-ignore
import { CommentResponseDTO } from '../../data/dto/Comment/response';
import { commentSM, CommentSM } from '../metier/Comment';

export class CommentSA extends GenericSA<
  CommentDO,
  CommentRequestDTO,
  CommentResponseDTO,
  CommentSM,
  CommentFactory
> {
}

export const commentSA = new CommentSA(commentSM, commentFactory, 'Comment');

