import { GenericController } from '../../common/infrastructure/generic.controller';
import { LangueDO } from '../../data/do/Langue';
// @ts-ignore
import { LangueRequestDTO } from '../../data/dto/Langue/request';
// @ts-ignore
import { LangueResponseDTO } from '../../data/dto/Langue/response';
import { langueSA, LangueSA } from '../../service/applicatif/Langue';

class LangueController extends GenericController<
  LangueDO,
  LangueRequestDTO,
  LangueResponseDTO,
  LangueSA
> {}

export const langueController = new LangueController(langueSA);

