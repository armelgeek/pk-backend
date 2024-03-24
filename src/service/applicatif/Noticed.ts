import { GenericSA } from '../../common/service/generic.sa';
import {
    noticedFactory,
  NoticedFactory,
} from '../../constraint/factory/Noticed';
import { NoticedDO } from '../../data/do/Noticed';
// @ts-ignore
import { NoticedRequestDTO } from '../../data/dto/Noticed/request';
// @ts-ignore
import { NoticedResponseDTO } from '../../data/dto/Noticed/response';
import { noticedSM, NoticedSM } from '../metier/Noticed';

export class NoticedSA extends GenericSA<
  NoticedDO,
  NoticedRequestDTO,
  NoticedResponseDTO,
  NoticedSM,
  NoticedFactory
> {
}

export const noticedSA = new NoticedSA(noticedSM, noticedFactory, 'Noticed');

