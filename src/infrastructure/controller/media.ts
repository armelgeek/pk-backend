import { GenericController } from '../../common/infrastructure/generic.controller';
import { mediaDO } from '../../data/do/media';
// @ts-ignore
import { mediaRequestDTO } from '../../data/dto/media/request';
// @ts-ignore
import { mediaResponseDTO } from '../../data/dto/media/response';
import { mediaSA, mediaSA } from '../../service/applicatif/media';

class mediaController extends GenericController<
  mediaDO,
  mediaRequestDTO,
  mediaResponseDTO,
  mediaSA
> {}

export const mediaController = new mediaController(mediaSA);

