import { GenericSA } from '../../common/service/generic.sa';
import {
    mediaFactory,
  MediaFactory,
} from '../../constraint/factory/Media';
import { MediaDO } from '../../data/do/Media';
// @ts-ignore
import { MediaRequestDTO } from '../../data/dto/Media/request';
// @ts-ignore
import { MediaResponseDTO } from '../../data/dto/Media/response';
import { mediaSM, MediaSM } from '../metier/Media';

export class MediaSA extends GenericSA<
  MediaDO,
  MediaRequestDTO,
  MediaResponseDTO,
  MediaSM,
  MediaFactory
> {
}

export const mediaSA = new MediaSA(mediaSM, mediaFactory, 'Media');

