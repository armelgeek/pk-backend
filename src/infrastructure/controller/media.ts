import { GenericController } from '../../common/infrastructure/generic.controller';
import { MediaDO } from '../../data/do/Media';
// @ts-ignore
import { MediaRequestDTO } from '../../data/dto/Media/request';
// @ts-ignore
import { MediaResponseDTO } from '../../data/dto/Media/response';
import { mediaSA, MediaSA } from '../../service/applicatif/Media';

class MediaController extends GenericController<
  MediaDO,
  MediaRequestDTO,
  MediaResponseDTO,
  MediaSA
> {}

export const mediaController = new MediaController(mediaSA);

