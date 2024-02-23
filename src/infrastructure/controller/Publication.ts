import { GenericController } from '../../common/infrastructure/generic.controller';
import { PublicationDO } from '../../data/do/Publication';
// @ts-ignore
import { PublicationRequestDTO } from '../../data/dto/Publication/request';
// @ts-ignore
import { PublicationResponseDTO } from '../../data/dto/Publication/response';
import { publicationSA, PublicationSA } from '../../service/applicatif/Publication';

class PublicationController extends GenericController<
  PublicationDO,
  PublicationRequestDTO,
  PublicationResponseDTO,
  PublicationSA
> {}

export const publicationController = new PublicationController(publicationSA);

