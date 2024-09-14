import { GenericController } from '../../common/infrastructure/generic.controller';
import { CommentDO } from '../../data/do/Comment';
// @ts-ignore
import { CommentRequestDTO } from '../../data/dto/Comment/request';
// @ts-ignore
import { CommentResponseDTO } from '../../data/dto/Comment/response';
import { commentSA, CommentSA } from '../../service/applicatif/Comment';

class CommentController extends GenericController<
  CommentDO,
  CommentRequestDTO,
  CommentResponseDTO,
  CommentSA
> {}

export const commentController = new CommentController(commentSA, "Comment");

