import { GenericController } from '../../common/infrastructure/generic.controller';
import { MediasDO } from '../../data/do/Medias';
// @ts-ignore
import { MediasRequestDTO } from '../../data/dto/Medias/request';
// @ts-ignore
import { MediasResponseDTO } from '../../data/dto/Medias/response';
import { mediasSA, MediasSA } from '../../service/applicatif/Medias';

class MediasController extends GenericController<
  MediasDO,
  MediasRequestDTO,
  MediasResponseDTO,
  MediasSA
> {}

export const mediasController = new MediasController(mediasSA);

