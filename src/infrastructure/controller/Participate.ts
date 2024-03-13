import { GenericController } from '../../common/infrastructure/generic.controller';
import { ParticipateDO } from '../../data/do/Participate';
// @ts-ignore
import { ParticipateRequestDTO } from '../../data/dto/Participate/request';
// @ts-ignore
import { ParticipateResponseDTO } from '../../data/dto/Participate/response';
import { participateSA, ParticipateSA } from '../../service/applicatif/Participate';

class ParticipateController extends GenericController<
  ParticipateDO,
  ParticipateRequestDTO,
  ParticipateResponseDTO,
  ParticipateSA
> {}

export const participateController = new ParticipateController(participateSA);

