import { GenericSA } from '../../common/service/generic.sa';
import {
    mediasFactory,
  MediasFactory,
} from '../../constraint/factory/Medias';
import { MediasDO } from '../../data/do/Medias';
// @ts-ignore
import { MediasRequestDTO } from '../../data/dto/Medias/request';
// @ts-ignore
import { MediasResponseDTO } from '../../data/dto/Medias/response';
import { mediasSM, MediasSM } from '../metier/Medias';

export class MediasSA extends GenericSA<
  MediasDO,
  MediasRequestDTO,
  MediasResponseDTO,
  MediasSM,
  MediasFactory
> {
}

export const mediasSA = new MediasSA(mediasSM, mediasFactory, 'Medias');

