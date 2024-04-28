import { GenericSA } from '../../common/service/generic.sa';
import {
    mediaFactory,
  mediaFactory,
} from '../../constraint/factory/media';
import { mediaDO } from '../../data/do/media';
// @ts-ignore
import { mediaRequestDTO } from '../../data/dto/media/request';
// @ts-ignore
import { mediaResponseDTO } from '../../data/dto/media/response';
import { mediaSM, mediaSM } from '../metier/media';

export class mediaSA extends GenericSA<
  mediaDO,
  mediaRequestDTO,
  mediaResponseDTO,
  mediaSM,
  mediaFactory
> {
}

export const mediaSA = new mediaSA(mediaSM, mediaFactory, 'media');

