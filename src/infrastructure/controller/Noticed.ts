import { GenericController } from '../../common/infrastructure/generic.controller';
import { NoticedDO } from '../../data/do/Noticed';
// @ts-ignore
import { NoticedRequestDTO } from '../../data/dto/Noticed/request';
// @ts-ignore
import { NoticedResponseDTO } from '../../data/dto/Noticed/response';
import { noticedSA, NoticedSA } from '../../service/applicatif/Noticed';

class NoticedController extends GenericController<
  NoticedDO,
  NoticedRequestDTO,
  NoticedResponseDTO,
  NoticedSA
> {}

export const noticedController = new NoticedController(noticedSA);

